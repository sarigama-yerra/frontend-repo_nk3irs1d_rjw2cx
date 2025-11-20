import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 selection:bg-amber-300 selection:text-slate-950">
      {/* Background texture + aurora */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(2,6,23,1)_40%,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_60%_-20%,rgba(251,191,36,0.06),rgba(217,70,239,0.06),rgba(34,211,238,0.06),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <FAQ />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cyan-100/70 text-sm">© {new Date().getFullYear()} Nebula — AI Video Studio</p>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300 px-4 py-2 text-slate-900 font-semibold">Start your project</a>
        </div>
      </footer>
    </div>
  )
}

export default App
