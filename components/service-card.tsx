import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative h-full min-h-96 overflow-hidden bg-slate-900 sm:min-h-[28rem]">
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3 className="font-heading text-2xl font-bold text-white">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-amber-400">
          Découvrir
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
      <Link
        href={`/prestations/${service.slug}`}
        className="absolute inset-0 focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-400"
        aria-label={`Découvrir la prestation : ${service.title}`}
      />
    </article>
  );
}
