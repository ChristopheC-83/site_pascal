import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Antennes TV", href: "/prestations/antennes-reception-tv" },
  { label: "Visiophones", href: "/prestations/visiophones-interphones" },
  { label: "Portails & automatismes", href: "/prestations/motorisation-portail" },
  { label: "Alarmes & sécurité", href: "/prestations/alarmes-securite" },
  { label: "Contact", href: "/contact" },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={
        mobile
          ? "border-t border-slate-200 px-5 py-4 text-base font-medium text-slate-800 first:border-t-0"
          : "relative py-5 text-sm font-semibold text-slate-700 transition-colors after:absolute after:inset-x-0 after:bottom-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber-600 after:transition-transform hover:text-slate-950 hover:after:scale-x-100 focus-visible:text-slate-950"
      }
    >
      {item.label}
    </Link>
  ));
}

export function SiteHeader() {
  return (
    <header className="relative z-30 bg-white">
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group min-w-0"
            aria-label="Pascal Albert, accueil"
          >
            <span className="block font-heading text-xl font-bold tracking-[0.08em] sm:text-2xl">
              Pascal <span className="text-amber-500">ALBERT</span>
            </span>
            <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.14em] text-slate-300 sm:text-xs">
              Basse tension <span aria-hidden="true">•</span> Automatismes{" "}
              <span aria-hidden="true">•</span> Sécurité
            </span>
          </Link>

          <div className="shrink-0 text-right">
            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 sm:block">
              Appelez votre artisan
            </span>
            <a
              href="tel:+33607568538"
              className="mt-1 inline-flex min-h-11 items-center rounded-sm bg-amber-500 px-4 text-base font-bold tracking-wide text-slate-950 transition-colors hover:bg-amber-400 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bg-transparent  sm:text-xl sm:text-white "
            >
              06 07 56 85 38
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,23,42,0.05)]">
        <nav
          className="mx-auto hidden max-w-7xl items-center gap-6 px-8 lg:flex lg:px-10 xl:gap-8"
          aria-label="Navigation principale"
        >
          <NavigationLinks />
          <span className="ml-auto hidden text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 xl:block">
            Uchaud · Nîmes · Montpellier
          </span>
        </nav>

        <details className="group lg:hidden">
          <summary className="mx-auto flex min-h-14 max-w-7xl cursor-pointer list-none items-center justify-between px-5 text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 marker:hidden sm:px-8">
            Navigation
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform group-open:translate-y-1.75 group-open:rotate-45" />
              <span className="absolute left-0 top-1.75 h-0.5 w-5 bg-current transition-opacity group-open:opacity-0" />
              <span className="absolute left-0 top-3.5 h-0.5 w-5 bg-current transition-transform group-open:-translate-y-1.75 group-open:-rotate-45" />
            </span>
          </summary>
          <nav
            className="flex flex-col border-t border-slate-200 bg-slate-50"
            aria-label="Navigation mobile"
          >
            <NavigationLinks mobile />
          </nav>
        </details>
      </div>
    </header>
  );
}
