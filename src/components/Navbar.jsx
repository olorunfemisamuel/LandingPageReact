import { useState } from "react"
import HamburgerBtns from "./HambrugerBtns"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuId = "mobile-nav"
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-white"
          aria-label="Go to homepage"
        >
          Brand
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <li>
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/30 hover:text-white"
          >
            Let’s talk
          </a>


        {/* Hamburger menu */}
          <HamburgerBtns isOpen={isOpen} onToggle={toggleMenu} controlsId={menuId} />
        </div>
      </nav>

      <div
        id={menuId}
        className={`border-t border-white/10 bg-black/70 transition-all duration-200 ease-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div
          className={`mx-auto max-w-6xl px-4 py-4 transition-transform duration-200 ease-out sm:px-6 ${
            isOpen ? "translate-y-0" : "-translate-y-2"
          }`}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col gap-3 text-sm font-medium text-white/90">
            <li>
              <a href="#home" onClick={closeMenu} className="block py-2 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className="block py-2 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu} className="block py-2 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="block py-2 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Navbar