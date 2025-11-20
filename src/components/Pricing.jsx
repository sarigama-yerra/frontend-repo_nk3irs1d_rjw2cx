export default function Pricing(){
  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12">
            <h3 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-mona)' }}>Simple, transparent pricing</h3>
            <p className="mt-2 text-cyan-100/90">No retainers. Pay per video. Revisions included. 48-hour delivery.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-amber-200/90">Single</div>
                <div className="mt-2 text-4xl font-extrabold text-white">$349</div>
                <ul className="mt-4 space-y-2 text-cyan-100/90 text-sm">
                  <li>1 AI voiceover</li>
                  <li>Script & storyboard</li>
                  <li>15–30s edit</li>
                  <li>Platform exports</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200/30 bg-gradient-to-br from-amber-300/15 via-fuchsia-400/15 to-cyan-300/15 p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-amber-200/90">Pack of 3</div>
                <div className="mt-2 text-4xl font-extrabold text-white">$899</div>
                <ul className="mt-4 space-y-2 text-cyan-100/90 text-sm">
                  <li>3 AI voiceovers</li>
                  <li>3 scripts & storyboards</li>
                  <li>Mix of 15–30s edits</li>
                  <li>Platform exports</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cyan-100/90">
              Need something bigger? We do monthly creative for brands and agencies.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h4 className="text-xl font-semibold text-white">Get a custom quote</h4>
            <p className="mt-2 text-cyan-100/90 text-sm">Share your product photos and goals. We’ll reply with angles, timing, and price.</p>
            <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
              <input className="w-full rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Name"/>
              <input className="w-full rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Email"/>
              <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Tell us about your product & goals"/>
              <button className="w-full rounded-xl bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300 px-6 py-3 text-slate-900 font-semibold">
                Request quote
              </button>
            </form>
            <div className="mt-4 text-xs text-cyan-100/70">We’ll respond within a few hours.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
