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
            <div style={{ width: '100%', height: '400px', background: 'radial-gradient(ellipse at center, #4a1a6e 0%, #000 70%)' }} />
          )}

        </div>
        <div className="absolute inset-0 z-0 bg-linear-to-t from-black via-black/40 to-black/10" />

        {/* Hero text + image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6">

          {/* Your photo */}
          <img
  src="/samuel.webp"  
  alt="Samuel Olorunfemi"
  className="w-42 h-42 rounded-full object-cover border-2 border-white/20 shadow-lg"  
/>
          <SplitText
            text="Hello! I'm Samuel Olorunfemi"
            className="text-5xl font-semibold"
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

          {/* Subtitle */}
          {/* <p className="text-sm text-white/60 tracking-widest uppercase">
            Scroll down to explore my portfolio
          </p> */}

        </div>
      </section>

      <AboutMe/>

      <Footer />
    </div>
  )
}

export default LandingPage