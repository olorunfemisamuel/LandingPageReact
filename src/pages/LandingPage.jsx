import Navbar from '../components/Navbar.jsx'
import HeroIMGreact from '../assets/images/HeroIMGreact.jpg'
import Footer from '../components/Footer.jsx'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="home" className="relative">
        <img
          src={HeroIMGreact}
          alt="Hero"
          className="h-[70vh] w-full object-cover sm:h-[78vh]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-12 sm:px-6 sm:pb-16">
            <div className="max-w-2xl space-y-5">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                Build your next idea with React
              </h1>
              <p className="text-base text-white/75 sm:text-lg">
                A clean, modern landing page with a clear message and a strong call
                to action.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get started
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>


  )
}

