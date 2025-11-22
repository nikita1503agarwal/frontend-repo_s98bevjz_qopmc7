import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 opacity-80">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900"></div>
        <div className="h-[70vh] w-full">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[60vh]">
          <div className="mt-10 lg:mt-0">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">Marketing digital • Communication • Stratégie</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Spécialiste en marketing & communication
            </h1>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
              J’aide les marques à développer une identité forte, à engager leurs communautés et à transformer les données en décisions stratégiques. Un mélange d’analyse, de créativité et d’exécution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:from-blue-500 hover:to-indigo-500 transition">Explorer le portfolio</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">Me contacter</a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
