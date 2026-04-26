import { useRef, useState } from 'react';

const Card = ({ project }) => (
  
    <a href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 overflow-hidden flex flex-col flex-shrink-0 w-[75vw] md:w-[280px] snap-start"
  >
    <div className="w-full h-40 overflow-hidden bg-white/5 relative">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.style.background = 'linear-gradient(135deg, #1B1722, #2F293A)';
        }}
      />
      <span className="absolute top-2 left-2 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-black/50 text-purple-400 border border-purple-500/30">
        {project.tag}
      </span>
    </div>
    <div className="p-4 flex items-start justify-between gap-3 flex-1">
      <div>
        <p className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors duration-200">
          {project.name}
        </p>
        <p className="text-white/40 text-xs mt-1 leading-relaxed">{project.desc}</p>
      </div>
      <span className="text-white/20 text-lg group-hover:text-purple-400 transition-colors duration-200 shrink-0">↗</span>
    </div>
  </a>
);

const projects = [
  {
    name: "DigitalEdHub",
    desc: "E-learning platform — courses, payments, and community features built end-to-end.",
    url: "https://digitaledhub.com.ng",
    image: "/projects/digitaledhub.png",
  },
  {
    name: "Shopeasy",
    desc: "Open source e-commerce project — contributed core features and improvements.",
    url: "https://github.com/olorunfemisamuel/ShopEasy",
    image: "/projects/github.png",
  },

  {
    name: "The Lightfortress Church",
    desc: "Developer on Project — Vue.js",
    url: "https://joinbcc25.org",
    image: "/projects/bcc.png",
  },


  {
    name: "Technology Company Website",
    desc: "Frontend Developer on Project — Vanilla Javascript.",
    url: "https://bytespark.com.ng/",
    image: "/projects/bytespark.png",
  },

  {
    name: "Portfolio",
    desc: "Open source e-commerce project — contributed core features and improvements.",
    url: "https://themofemi-portfolio.vercel.app/",
    image: "/projects/mo.png",
  },

  {
    name: "Financial Company Website",
    desc: "Open source e-commerce project — contributed core features and improvements.",
    url: "https://dph-website-qeq8.vercel.app/",
    image: "/projects/dph.png",
    // tag: "Frontend "
  },


];

function ProjectCards() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index];
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setCurrent(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.offsetWidth + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrent(index);
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
        Featured Projects
      </span>

      {/* Scrollable row — works on both mobile and desktop */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {projects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === current ? 'bg-purple-400 w-4' : 'bg-white/20 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;