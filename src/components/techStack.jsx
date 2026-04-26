import {
    FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact, FaPhp
  } from 'react-icons/fa';
  import {
    SiTypescript, SiNuxt, SiTailwindcss, SiLaravel
  } from 'react-icons/si';
  
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#42B883" },
    { name: "Nuxt.js", icon: <SiNuxt />, color: "#00DC82" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  ];
  
  const doubled = [...skills, ...skills];
  
  function TechStack() {
    return (
      <div className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
          Tech Stack
        </span>
  
        <div className="overflow-hidden w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
  
          <div
            className="flex gap-6 w-max"
            style={{ animation: 'marquee 18s linear infinite' }}
          >
            {doubled.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[60px]">
                <div
                  className="text-4xl transition-transform duration-200 hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-white/40 text-[10px] uppercase tracking-wider whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
  
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    );
  }
  
  export default TechStack;