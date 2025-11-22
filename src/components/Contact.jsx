import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Merci pour votre message ! Je vous réponds rapidement.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Travaillons ensemble</h2>
            <p className="mt-4 text-white/80 max-w-prose">Vous avez un projet de branding, de stratégie social media ou d’analyse marché ? Parlons-en.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                'Branding & Identité',
                'Calendrier éditorial',
                'Campagnes social ads',
                'Audit & Benchmark',
              ].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 text-sm">{t}</div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80">Prénom</label>
                <input required className="mt-1 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Alex" />
              </div>
              <div>
                <label className="block text-sm text-white/80">Nom</label>
                <input required className="mt-1 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Martin" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/80">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-blue-500" placeholder="vous@exemple.com" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/80">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Parlez-moi de votre projet..." />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:from-blue-500 hover:to-indigo-500 transition">
              Envoyer
            </button>
            {status && <p className="mt-3 text-sm text-green-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
