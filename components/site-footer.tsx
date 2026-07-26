export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10 lg:py-16">
        <div>
          <p className="font-heading text-xl font-bold tracking-[0.08em] text-white">
            PASCAL <span className="text-amber-500">ALBERT</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Installation et dépannage en basse tension, automatismes et sécurité entre Nîmes et Montpellier.
          </p>
        </div>

        <address className="text-sm not-italic leading-7">
          <p className="mb-2 font-bold uppercase tracking-[0.12em] text-white">Coordonnées</p>
          <p>4 rue de la Manzanille<br />30620 UCHAUD</p>
          <a className="block hover:text-white" href="tel:+33607568538">06 07 56 85 38</a>
          <a className="mt-1 block break-all hover:text-white" href="mailto:ent.albertpascal@hotmail.fr">
            ent.albertpascal@hotmail.fr
          </a>
        </address>

        <nav className="text-sm leading-8" aria-label="Informations légales">
          <p className="mb-2 font-bold uppercase tracking-[0.12em] text-white">Informations</p>
          <span className="block text-slate-500">Mentions légales{" — à compléter"}</span>
          <span className="block text-slate-500">Politique de confidentialité{" — à compléter"}</span>
        </nav>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Pascal ALBERT. Tous droits réservés.
      </div>
    </footer>
  );
}
