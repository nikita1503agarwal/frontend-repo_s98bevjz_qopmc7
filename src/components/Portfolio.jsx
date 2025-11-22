import { motion } from 'framer-motion'
import { Palette, Megaphone, BarChart3, ExternalLink } from 'lucide-react'

const categories = [
  {
    key: 'branding',
    icon: Palette,
    title: 'Branding',
    desc: "Identité visuelle, logos, chartes graphiques et univers de marque.",
    items: [
      { title: 'Refonte d’identité', tag: 'Logo + Guidelines', link: '#' },
      { title: 'Plateforme de marque', tag: 'Story + Tonalité', link: '#' },
      { title: 'Kit social', tag: 'Templates & Assets', link: '#' },
    ],
  },
  {
    key: 'social',
    icon: Megaphone,
    title: 'Réseaux sociaux',
    desc: 'Campagnes digitales, community management et contenus créatifs.',
    items: [
      { title: 'Campagne UGC', tag: 'TikTok + Reels', link: '#' },
      { title: 'Stratégie éditoriale', tag: 'Calendrier & Lignes éditoriales', link: '#' },
      { title: 'Growth & Ads', tag: 'Meta/LinkedIn Ads', link: '#' },
    ],
  },
  {
    key: 'analysis',
    icon: BarChart3,
    title: 'Analyse & Benchmark',
    desc: 'Études de marché, analyses concurrentielles et rapports stratégiques.',
    items: [
      { title: 'Benchmark secteur', tag: 'Comparatif complet', link: '#' },
      { title: 'Audit social media', tag: 'Performance & Reco', link: '#' },
      { title: 'Plan d’actions', tag: 'Roadmap priorisée', link: '#' },
    ],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          <p className="mt-3 text-white/80">Une sélection de projets structurés par domaines d’expertise.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 text-white shadow">
                  <cat.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{cat.desc}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {cat.items.map((it) => (
                  <li key={it.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
                    <div>
                      <p className="font-medium text-white">{it.title}</p>
                      <p className="text-xs text-white/70">{it.tag}</p>
                    </div>
                    <a href={it.link} className="text-white/70 hover:text-white" aria-label="Voir le projet">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
