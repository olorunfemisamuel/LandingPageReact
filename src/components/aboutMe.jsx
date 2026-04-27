import TechStack from '@/components/techStack.jsx';
import ProjectCards from '@/components/ProjectCards';

function AboutMe() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div className="flex flex-col gap-6">

          <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            I build things <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              that actually ship.
            </span>
          </h2>

          <p className="text-white/60 text-base leading-relaxed">
            I'm a fullstack developer with <span className="text-white font-semibold">3+ years of experience</span> building
            and shipping products for real clients, real users. My work converts — from landing pages
            to full platforms, I write code that solve problems.
          </p>

          <p className="text-white/60 text-base leading-relaxed">
            I contributed to <span className="text-white font-semibold">Shopeasy</span>, an open source project,
            and independently built <span className="text-white font-semibold">DigitalEdHub</span> — a fully functional
            e-learning platform handling courses, payments, and community features end-to-end.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white">3+</span>
              <span className="text-xs text-white/40 uppercase tracking-widest">Years of Experience</span>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white">10+</span>
              <span className="text-xs text-white/40 uppercase tracking-widest">Projects Shipped</span>
            </div>
          </div>
        </div>

        {/* Right — Skills + Projects */}
        <div className="flex flex-col gap-6">

          <TechStack />

          <ProjectCards />

        </div>

      </div>
    </section>
  );
}

export default AboutMe;