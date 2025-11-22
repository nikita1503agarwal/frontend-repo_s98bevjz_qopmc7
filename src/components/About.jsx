export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">À propos de moi</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Avec plus de 6 ans d’expérience en marketing digital et communication, j’accompagne des entreprises et des organisations dans leur croissance. Mon approche : une vision globale, des stratégies ciblées et une exécution précise.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { k: 'Stratégie de marque', v: 'Positionnement, storytelling, branding' },
                { k: 'Social Media', v: 'Calendrier éditorial, campagnes, analytics' },
                { k: 'Création', v: 'Identité visuelle, contenus multimédia' },
                { k: 'Analyse', v: 'Études de marché, benchmarks, reporting' },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">{s.k}</p>
                  <p className="mt-1 font-medium text-white">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Parcours</h3>
              <ul className="mt-4 space-y-4 text-white/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <p><span className="font-medium text-white">Consultant(e) indépendant(e)</span> — accompagnement d’entreprises sur le branding, les réseaux sociaux et la stratégie digitale.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <p><span className="font-medium text-white">Agence de communication</span> — pilotage de campagnes 360°, coordination créative et media.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <p><span className="font-medium text-white">Master Marketing & Communication</span> — spécialisation en stratégie de marque et data marketing.</p>
                </li>
              </ul>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { n: '50+ projets', d: 'menés avec succès' },
                  { n: '8% à 35%', d: 'taux d’engagement moyen' },
                  { n: 'x2 à x5', d: 'ROI sur campagnes' },
                ].map((m) => (
                  <div key={m.n} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
                    <p className="text-2xl font-bold text-white">{m.n}</p>
                    <p className="text-sm text-white/70">{m.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
