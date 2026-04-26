import Navbar from '../components/Navbar.jsx'
import Prism from '../components/Prism';
import Footer from '../components/Footer.jsx'
import SplitText from "../components/SplitText";
import AboutMe from '@/components/aboutMe.jsx';


function LandingPage() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const isLowEnd = navigator.hardwareConcurrency <= 4;

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="home" className="relative">
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>

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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 gap-4 px-6">

<img
  src="/samuel.webp"
  alt="Samuel Olorunfemi"
  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-lg"
/>

          <SplitText
            text="Hello! I'm Samuel Olorunfemi"
            className="text-3xl md:text-5xl font-bold"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          {/* Responsive subtitle */}
          <p className="text-xs sm:text-sm text-white/60 tracking-widest uppercase text-center px-4">
            Scroll down to explore my portfolio
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

      <Footer />
    </div>
  )
}

export default LandingPage