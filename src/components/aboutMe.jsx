const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "Tailwind CSS", "Vue.js", "Nuxt.js", "React",
    "PHP", "Laravel", "Livewire"
  ];
  
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                that actually ship.
              </span>
            </h2>
  
            <p className="text-white/60 text-base leading-relaxed">
              I'm a fullstack developer with <span className="text-white font-semibold">3+ years of experience</span> building
              and shipping production-ready products for real clients. My work converts — from landing pages
              to full platforms, I write code that gets results.
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
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
              Tech Stack
            </span>
  
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
  
            <div className="mt-4 flex flex-col gap-3">
              {[
                {
                  name: "DigitalEdHub",
                  desc: "E-learning platform — courses, payments, community",
                  url: "https://digitaledhub.com.ng"  
                },
                {
                  name: "Shopeasy",
                  desc: "Open source contributor",
                  url: "https://github.com/olorunfemisamuel/ShopEasy"  
                },
              ].map((project) => (
                
                <a  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-200 group"
                >
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-400 shrink-0 group-hover:bg-pink-400 transition-colors duration-200" />
                  <div>
                    <p className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors duration-200">
                      {project.name}
                      <span className="ml-2 text-white/20 text-xs group-hover:text-purple-400">↗</span>
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">{project.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default AboutMe;