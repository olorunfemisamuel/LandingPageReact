import { useRef, useState } from 'react';

// 👈 Card is now outside ProjectCards
const Card = ({ project }) => (
  
    <a href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 overflow-hidden flex flex-col"
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
    tag: "Full Stack"
  },
  {
    name: "Shopeasy",
    desc: "Open source e-commerce project — contributed core features and improvements.",
    url: "https://github.com/olorunfemisamuel/ShopEasy",
    image: "/projects/github.png",
    tag: "Open Source"
  },
];

function ProjectCards() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prev = () => setCurrent(i => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrent(i => (i + 1) % projects.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
        Featured Projects
      </span>

      {/* Desktop — side by side */}
      <div className="hidden md:grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>

      {/* Mobile — swipeable one at a time */}
      <div className="md:hidden">
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Card project={projects[current]} />
        </div>

        <div className="flex items-center justify-center gap-2 mt-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === current ? 'bg-purple-400 w-4' : 'bg-white/20 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;