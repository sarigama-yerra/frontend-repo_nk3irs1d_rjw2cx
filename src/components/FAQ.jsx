const faqs = [
  { q: 'What do you need from me?', a: 'Just product photos and any key talking points. We handle the rest.' },
  { q: 'How fast is delivery?', a: 'Standard turnaround is 48 hours from receipt of assets.' },
  { q: 'Can you match my brand voice?', a: 'Yes. Share examples and we’ll tune script, voice and edit to match.' },
  { q: 'What revisions are included?', a: 'Copy tweaks, timing adjustments, and scene swaps are included.' },
]

export default function FAQ(){
  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-black text-white" style={{ fontFamily: 'var(--font-ibm-plex)' }}>Questions, answered</h3>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white font-semibold">{f.q}</span>
                  <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90 group-open:hidden">Open</span>
                  <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-amber-200/90 hidden group-open:block">Close</span>
                </div>
              </summary>
              <p className="mt-3 text-cyan-100/90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
