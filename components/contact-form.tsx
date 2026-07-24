"use client";

import { FormEvent, useRef, useState } from "react";

import { services } from "@/data/services";

type ContactFormProps = {
  initialService: string;
};

type FormErrors = Partial<
  Record<"name" | "contact" | "email" | "service" | "message", string>
>;

export function ContactForm({ initialService }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedService, setSelectedService] = useState(initialService);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPrepared, setIsPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Indiquez votre nom.";
    if (!phone && !email) {
      nextErrors.contact = "Indiquez au moins un téléphone ou une adresse email.";
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Saisissez une adresse email valide.";
    }
    if (!service) nextErrors.service = "Choisissez une prestation.";
    if (!message) nextErrors.message = "Décrivez brièvement votre besoin.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsPrepared(false);

      const firstInvalidField = nextErrors.name
        ? "name"
        : nextErrors.contact
          ? "phone"
          : nextErrors.email
            ? "email"
            : nextErrors.service
              ? "service"
              : "message";

      const field = form.elements.namedItem(firstInvalidField);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const requestPayload = {
      name,
      phone,
      email,
      service,
      commune: String(formData.get("commune") ?? "").trim(),
      message,
    };

    void requestPayload;
    setErrors({});
    setIsPrepared(true);
    form.reset();
    setSelectedService("");
  }

  const fieldClassName =
    "mt-2 min-h-12 w-full border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20";
  const errorClassName = "mt-2 text-sm font-medium text-red-700";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      {isPrepared && (
        <div role="status" className="border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-6 text-slate-800">
          Votre demande a bien été préparée. L’envoi par email sera activé prochainement.
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-sm font-bold text-slate-900">
          Nom <span className="text-amber-700" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={fieldClassName}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className={errorClassName}>{errors.name}</p>}
      </div>

      <fieldset>
        <legend className="text-sm font-bold text-slate-900">
          Vos coordonnées <span className="font-normal text-slate-500">(au moins une des deux)</span>
        </legend>
        <div className="mt-3 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-slate-800">Téléphone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={fieldClassName}
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? "contact-error" : undefined}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-800">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              className={fieldClassName}
              aria-invalid={Boolean(errors.contact || errors.email)}
              aria-describedby={errors.email ? "email-error" : errors.contact ? "contact-error" : undefined}
            />
            {errors.email && <p id="email-error" className={errorClassName}>{errors.email}</p>}
          </div>
        </div>
        {errors.contact && <p id="contact-error" className={errorClassName}>{errors.contact}</p>}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="text-sm font-bold text-slate-900">
            Prestation <span className="text-amber-700" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Choisissez une prestation</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>{service.title}</option>
            ))}
            <option value="autre-demande">Autre demande</option>
          </select>
          {errors.service && <p id="service-error" className={errorClassName}>{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="commune" className="text-sm font-bold text-slate-900">Commune</label>
          <input
            id="commune"
            name="commune"
            type="text"
            autoComplete="address-level2"
            className={fieldClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-bold text-slate-900">
          Message <span className="text-amber-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          className={`${fieldClassName} resize-y py-3`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className={errorClassName}>{errors.message}</p>}
      </div>

      <p className="text-xs leading-5 text-slate-500">
        Les champs marqués d’un astérisque sont obligatoires. Ce formulaire prépare actuellement votre demande sans l’envoyer.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-14 w-full items-center justify-center bg-slate-950 px-7 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:w-auto"
      >
        Préparer ma demande de devis
      </button>
    </form>
  );
}
