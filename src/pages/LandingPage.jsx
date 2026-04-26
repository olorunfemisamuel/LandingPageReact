import Navbar from '../components/Navbar.jsx'
import Prism from '../components/Prism';
import Footer from '../components/Footer.jsx'
import SplitText from "../components/SplitText";


function LandingPage() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const isLowEnd = navigator.hardwareConcurrency <= 4;  

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="home" className="relative">
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>

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

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <SplitText
            text="Hello, you!"
            className="text-2xl font-semibold"
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
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage