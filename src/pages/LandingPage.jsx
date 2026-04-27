import Navbar from '../components/Navbar.jsx'
import Prism from '../components/Prism';
import Footer from '../components/Footer.jsx'
import AboutMe from '@/components/aboutMe.jsx';
import SocialMediaIcons from '@/components/socialmediaIcons.jsx';
import { useState, useEffect } from 'react';
import ServicesSection from '@/components/ServicesSection.jsx';
import Contact from '@/components/Contact.jsx';


const phrases = ["Hello! I'm Samuel Olorunfemi.", "I'm a Fullstack Developer."];

function LandingPage() {

 
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 50);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex(i => (i + 1) % phrases.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  const isLowEnd = navigator.hardwareConcurrency <= 4;

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="home" className="relative">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>

          {!isLowEnd ? (
            <Prism
              animationType="rotate"
              timeScale={0.5}
              height={3.5}
              baseWidth={5.5}
              scale={3.6}
              hueShift={0}
              colorFrequency={1}
              noise={0}
              glow={1}
              suspendWhenOffscreen={true}
            />
          ) : (
            <div style={{ width: '100%', height: '500px', background: 'radial-gradient(ellipse at center, #4a1a6e 0%, #000 70%)' }} />
          )}

        </div>
        <div className="absolute inset-0 z-0 bg-linear-to-t from-black via-black/40 to-black/10" />

        {/* Hero text + image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-24 sm:pt-32 md:justify-center md:pt-16 gap-5 px-6">

          <img
            src="/samuel.webp"
            alt="Samuel Olorunfemi"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-lg"
          />

          <div className="text-3xl md:text-5xl font-bold text-center">
            <span>{phrases[phraseIndex].slice(0, charIndex)}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </div>

          <SocialMediaIcons />


          {/* CTA Button */}

          <a href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600  text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <span>Let's Work Together</span>
            
          </a>

          {/* Responsive subtitle */}
          <p className="text-xs sm:text-sm text-white/60 tracking-widest uppercase text-center px-4">
            Explore my portfolio
          </p>

          {/* SVG Scroll button */}
          <button
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="mt-2 flex flex-col items-center gap-1 group cursor-pointer"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                className="group-hover:stroke-purple-400 transition-colors duration-300"
              />
              <path
                d="M12 16L18 22L24 16"
                stroke="white"
                strokeOpacity="0.7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-purple-400 transition-colors duration-300"
              />
            </svg>
          </button>

        </div>
      </section>

      <AboutMe />

      <ServicesSection />

      <Contact />

      <Footer />
    </div>
  )
}

export default LandingPage