import SocialMediaIcons from './socialmediaIcons.jsx';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `mailto:forfemi@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's work <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              together.
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-lg">
            Have a project in mind? I'd love to hear about it. Send me a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Direct contacts */}
          <div className="flex flex-col gap-8">

            {/* Email */}
            
              <a href="mailto:forfemi@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors duration-200">forfemi@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            
             <a href="https://wa.me/2348091985318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">WhatsApp</p>
                <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors duration-200">+234 809 198 5318</p>
              </div>
            </a>

            {/* Social icons */}
            <div className="flex flex-col gap-3">
              <p className="text-white/40 text-xs uppercase tracking-widest">Socials</p>
              <SocialMediaIcons />
            </div>

          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label className="text-white/40 text-xs uppercase tracking-widest">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder=""
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder=""
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/40 text-xs uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;