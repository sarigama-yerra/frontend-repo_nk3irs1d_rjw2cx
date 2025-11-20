import { Stars, Film, Timer, Wand2, Megaphone, Images } from 'lucide-react'

const features = [
  {
    icon: ScriptIcon,
    title: 'Conversion-first scripts',
    desc: 'Hook, value, proof, CTA — built for ROAS. Multiple angles written to test.'
  },
  {
    icon: Wand2,
    title: 'AI voice & visuals',
    desc: 'Humanlike voiceovers and kinetic layouts tuned to your brand and audience.'
  },
  {
    icon: Timer,
    title: '48-hour turnaround',
    desc: 'Lightning-fast delivery with crystal-clear status updates along the way.'
  },
  {
    icon: Film,
    title: 'Ad-ready exports',
    desc: 'Delivered for TikTok, Reels, Shorts, and paid — ready to upload and scale.'
  },
]

function ScriptIcon(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M6 2h7a5 5 0 0 1 5 5v9a3 3 0 0 0 3 3H8a6 6 0 0 1-6-6V7a5 5 0 0 1 4-5Z" opacity=".2"/>
      <path fill="currentColor" d="M6 2h7a5 5 0 0 1 5 5v9a3 3 0 0 0 3 3H8a6 6 0 0 1-6-6V7a5 5 0 0 1 4-5Zm2 6h8v2H8V8zm0 4h6v2H8v-2z"/>
    </svg>
  )
}

export default function Features(){
  return (
    <section id="work" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_10%_0%,rgba(34,211,238,0.15),transparent_60%)]"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-fuchsia-400 to-cyan-300 text-slate-900 shadow-inner">
                {typeof f.icon === 'function' ? <f.icon /> : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-cyan-100/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
