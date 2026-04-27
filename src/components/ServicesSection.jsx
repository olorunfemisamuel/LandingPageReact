const services = [
  {
    title: "Web Development",
    desc: "From landing pages to full-scale web applications — I build fast, responsive, and production-ready websites/web applications tailored to your business goals.",
    stat: "6+ Projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3" />
        <path d="M13 14h3" />
      </svg>
    ),
  },
  {
    title: "Payment Integration",
    desc: "Seamless and secure payment gateway integration for your platform — Paystack, Stripe, Flutterwave, and more, wired up end-to-end.",
    stat: "2 Projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h2M10 15h4" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps built with modern frameworks — clean, fast, and shipped to production.",
    stat: "1 Project",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-black text-white py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What I can <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              do for you.
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-lg">
            I work with individuals, startups, and businesses to bring their digital ideas to life — clean code, real results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex flex-col gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title + Desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-xl">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </div>

              {/* Stat */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="text-purple-400 font-bold text-2xl">{service.stat}</span>
                <p className="text-white/30 text-xs mt-0.5 uppercase tracking-widest">Delivered</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;