import SocialMediaIcons from '@/components/socialmediaIcons.jsx';

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <a href="#">
            <img
              src="/SAMUEL_Footer (1).png"
              alt="Samuel Olorunfemi"
              className="h-20 w-auto object-contain"
            />
          </a>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <SocialMediaIcons />
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year}</p>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </footer>
  )
}