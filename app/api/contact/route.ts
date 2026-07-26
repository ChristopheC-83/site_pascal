import { Resend } from "resend";

import { services } from "@/data/services";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MINIMUM_SUBMISSION_DELAY = 2_000;
const SUCCESS_MESSAGE = "Votre demande a bien été envoyée.";
const ERROR_MESSAGE =
  "L’envoi a échoué. Vous pouvez également nous contacter par téléphone.";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  website: string;
  formStartedAt: number;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function readString(input: Record<string, unknown>, key: string) {
  const value = input[key];
  return typeof value === "string" ? value.trim() : null;
}

function neutralResponse() {
  return Response.json({ success: true, message: SUCCESS_MESSAGE });
}

function invalidResponse(message: string) {
  return Response.json({ success: false, message }, { status: 400 });
}

function validatePayload(value: unknown):
  | { success: true; data: ContactPayload; serviceLabel: string }
  | { success: false; message: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { success: false, message: "Les données du formulaire sont invalides." };
  }

  const input = value as Record<string, unknown>;
  const name = readString(input, "name");
  const phone = readString(input, "phone");
  const email = readString(input, "email");
  const service = readString(input, "service");
  const city = readString(input, "city");
  const message = readString(input, "message");
  const website = readString(input, "website");

  if (
    name === null ||
    phone === null ||
    email === null ||
    service === null ||
    city === null ||
    message === null ||
    website === null ||
    typeof input.formStartedAt !== "number" ||
    !Number.isFinite(input.formStartedAt)
  ) {
    return { success: false, message: "Les données du formulaire sont invalides." };
  }

  const data: ContactPayload = {
    name,
    phone,
    email,
    service,
    city,
    message,
    website,
    formStartedAt: input.formStartedAt,
  };
  const limits: Array<[keyof Omit<ContactPayload, "formStartedAt">, number]> = [
    ["name", 100],
    ["phone", 30],
    ["email", 200],
    ["service", 100],
    ["city", 100],
    ["message", 3_000],
    ["website", 200],
  ];

  if (limits.some(([field, maximum]) => data[field].length > maximum)) {
    return { success: false, message: "Un ou plusieurs champs sont trop longs." };
  }

  if (!data.name) return { success: false, message: "Le nom est obligatoire." };
  if (!data.phone && !data.email) {
    return { success: false, message: "Indiquez au moins un téléphone ou une adresse email." };
  }
  if (data.email && !EMAIL_PATTERN.test(data.email)) {
    return { success: false, message: "L’adresse email renseignée est invalide." };
  }
  if (!data.service) return { success: false, message: "La prestation est obligatoire." };
  if (!data.message) return { success: false, message: "Le message est obligatoire." };

  const serviceLabel =
    data.service === "autre-demande"
      ? "Autre demande"
      : services.find((item) => item.slug === data.service)?.title;

  if (!serviceLabel) {
    return { success: false, message: "La prestation sélectionnée est invalide." };
  }

  return { success: true, data, serviceLabel };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return invalidResponse("Les données du formulaire sont invalides.");
  }

  const validation = validatePayload(body);
  if (!validation.success) return invalidResponse(validation.message);

  const { data, serviceLabel } = validation;

  if (data.website) return neutralResponse();

  const elapsedTime = Date.now() - data.formStartedAt;
  if (elapsedTime < MINIMUM_SUBMISSION_DELAY || elapsedTime > 86_400_000) {
    return neutralResponse();
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey?.trim() || !from?.trim() || !to?.trim()) {
    console.error("Contact email configuration is incomplete.");
    return Response.json({ success: false, message: ERROR_MESSAGE }, { status: 500 });
  }

  const receivedAt = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Europe/Paris",
  }).format(new Date());
  const safeSubjectName = data.name.replace(/[\r\n]+/g, " ");
  const subject = `Nouvelle demande de devis — ${serviceLabel} — ${safeSubjectName}`;
  const html = `
    <h1>Nouvelle demande de devis</h1>
    <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.phone || "Non renseigné")}</p>
    <p><strong>Email :</strong> ${escapeHtml(data.email || "Non renseigné")}</p>
    <p><strong>Prestation :</strong> ${escapeHtml(serviceLabel)}</p>
    <p><strong>Commune :</strong> ${escapeHtml(data.city || "Non renseignée")}</p>
    <p><strong>Date de réception :</strong> ${escapeHtml(receivedAt)}</p>
    <h2>Message</h2>
    <p style="white-space: pre-wrap">${escapeHtml(data.message)}</p>
  `;
  const text = [
    "Nouvelle demande de devis",
    "",
    `Nom : ${data.name}`,
    `Téléphone : ${data.phone || "Non renseigné"}`,
    `Email : ${data.email || "Non renseigné"}`,
    `Prestation : ${serviceLabel}`,
    `Commune : ${data.city || "Non renseignée"}`,
    `Date de réception : ${receivedAt}`,
    "",
    "Message :",
    data.message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      ...(data.email ? { replyTo: data.email } : {}),
    });

    if (error) {
      console.error("Resend rejected the contact email.", {
        name: error.name,
        statusCode: error.statusCode,
      });
      return Response.json({ success: false, message: ERROR_MESSAGE }, { status: 502 });
    }

    return Response.json({ success: true, message: SUCCESS_MESSAGE });
  } catch (error) {
    console.error("Unexpected contact email failure.", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return Response.json({ success: false, message: ERROR_MESSAGE }, { status: 500 });
  }
}

