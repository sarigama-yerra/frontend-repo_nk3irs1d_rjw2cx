import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Share product photos', desc: 'Drop your images and notes. No long briefs — we keep it easy.' },
  { title: 'Script & storyboard', desc: 'We write several conversion-focused angles and a quick storyboard.' },
  { title: 'AI voice & edit', desc: 'We synthesize the perfect voice and edit kinetic visuals to match.' },
  { title: 'Delivery & iterate', desc: 'Get exports for every platform. Request tweaks — we ship fast.' },
]

export default function Process(){
  return (
    <section id="process" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-fuchsia-400 to-cyan-300 text-slate-900 text-sm font-bold shadow-inner">{i+1}</span>
                  <h4 className="text-white font-semibold">{s.title}</h4>
                </div>
                <p className="mt-3 text-cyan-100/90">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
