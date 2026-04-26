import { useRef, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-99 top-[1.2em] md:top-[2em] ${className}`}>
      <nav
        className="rounded-xl shadow-md overflow-hidden"
        style={{ backgroundColor: baseColor }}
      >
        {/* Top bar */}
        <div className="h-[60px] flex items-center justify-between px-4 relative">

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer bg-transparent border-0 p-0 z-10"
            style={{ color: menuColor || '#000' }}
          >
            <span
              className="block w-[26px] h-[2px] bg-current transition-all duration-300 origin-center"
              style={{ transform: isOpen ? 'translateY(4px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-[26px] h-[2px] bg-current transition-all duration-300 origin-center"
              style={{ transform: isOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }}
            />
          </button>

          {/* Logo centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt={logoAlt} className="h-[50px] w-auto" />
          </div>

          {/* CTA button */}
          <button
            type="button"
            className="rounded-[8px] px-4 py-2 font-medium text-sm cursor-pointer border-0 transition-colors duration-300"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Let's Talk
          </button>
        </div>

        {/* Expandable content */}
        <div
          ref={contentRef}
          style={{
            maxHeight: isOpen ? '600px' : '0px',
            transition: 'max-height 0.4s ease-in-out',
            overflow: 'hidden'
          }}
        >
          <div className="p-2 flex flex-col md:flex-row gap-2 md:gap-3">
            {(items || []).slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 p-4 rounded-[8px] flex-1 min-h-[60px]"
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                <div className="font-normal tracking-tight text-lg md:text-xl">
                  {item.label}
                </div>
                <div className="mt-auto flex flex-col gap-1">
                  {(item.links || []).map((lnk, i) => (
                    <a
                      key={i}
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      className="inline-flex items-center gap-1.5 text-sm no-underline hover:opacity-75 transition-opacity duration-200"
                      style={{ color: item.textColor }}
                    >
                      <GoArrowUpRight aria-hidden="true" />
                      {lnk.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;