import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(252,211,77,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_20%,rgba(168,85,247,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_30%_20%,rgba(34,211,238,0.22),transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-amber-100/90">
            Full-service AI video from photos
          </div>
          <h1 className="mt-6 text-5xl/tight sm:text-6xl/tight font-black text-white" style={{ fontFamily: 'var(--font-ibm-plex)' }}>
            Turn your product photos into scroll-stopping AI videos
          </h1>
          <p className="mt-5 text-lg text-cyan-100/90">
            Script. Voice. Edit. Delivery. We handle everything in 48 hours. You send photos, we send high-converting video ads ready to launch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300 px-6 py-3 text-slate-900 font-semibold shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              Get your video quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white/90 hover:text-white">
              See examples
            </a>
          </div>
          <div className="mt-6 text-xs text-cyan-100/70">
            No meetings required • Fast turnaround • Usage-ready deliverables
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950/40">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
        </div>
      </div>
    </section>
  )
}
