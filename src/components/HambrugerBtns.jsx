function HamburgerBtns({ isOpen, onToggle, controlsId }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      className="relative inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white/90 transition hover:border-white/30 hover:text-white md:hidden"
    >
      <span className="relative h-5 w-5">
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 h-5 w-5 transform transition duration-200 ease-out ${
            isOpen ? "rotate-90 opacity-0 scale-90" : "rotate-0 opacity-100 scale-100"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>

        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 h-5 w-5 transform transition duration-200 ease-out ${
            isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-90"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </span>
    </button>
  )
}

export default HamburgerBtns