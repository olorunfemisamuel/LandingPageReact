const testimonials = [
    {
      quote:
        "Samuel Olorunfemi built our NGO website and payment integration in a remarkably short period of time and with incredible precision. The result exceeded our expectations completely.",
      name: "Light Reach Initiative",
      role: "Non-Profit Organisation",
      initials: "LR",
    },
    {
        quote:
          "Our income went up by 10% after Samuel built our platform. Students said the platform made learning easy and seamless.",
        name: "DigitalEd Hub",
        role: "E-Learning Platform",
        initials: "DE",
      },
    {
      quote:
        "Samuel delivered our conference website on time and it handled all 300+ attendees without a hitch. Clean, fast, and exactly what we envisioned.",
      name: "The Lightfortress Church",
      role: "BCC 2025 Conference",
      initials: "LF",
    },
  ];
  
  const QuoteIcon = () => (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.38667 1.68 8.53333 0 12.64 0L13.92 2.56C11.04 3.25333 8.85333 4.69333 7.36 6.88C5.92 9.01333 5.2 11.36 5.2 13.92H10.4V24H0ZM18.08 24V14.4C18.08 10.4 19.1467 7.06667 21.28 4.4C23.4667 1.68 26.6133 0 30.72 0L32 2.56C29.12 3.25333 26.9333 4.69333 25.44 6.88C24 9.01333 23.28 11.36 23.28 13.92H28.48V24H18.08Z"
        fill="currentColor"
      />
    </svg>
  );
  
  function TestimonialCard({ testimonial, index }) {
    return (
      <div
        className="relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        {/* Quote mark */}
        <span className="text-purple-500/30">
          <QuoteIcon />
        </span>
  
        {/* Quote text */}
        <p className="text-white/70 text-sm leading-relaxed flex-1">
          "{testimonial.quote}"
        </p>
  
        {/* Divider */}
        <div className="h-px w-full bg-white/10" />
  
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
            <span className="text-purple-300 text-xs font-bold tracking-wide">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{testimonial.name}</p>
            <p className="text-white/40 text-xs mt-0.5">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function TestimonialSection() {
    return (
      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
  
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
              Testimonials
            </span>
            <h2 className="text-white text-2xl font-bold">
              What clients say
            </h2>
          </div>
  
          {/* Cards grid — 1 col mobile, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default TestimonialSection;