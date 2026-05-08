const PulsingDot = () => (
    <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
      <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
    </span>
  );
  
  function AvailableStrip() {
    return (
      <div className="w-full px-4 py-3 flex items-center justify-center">
  
        {/* Mobile: stacked, each line has its own dot */}
        <div className="flex sm:hidden flex-col items-start gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="flex items-center gap-2">
            <PulsingDot />
            <span className="text-sm text-white/70 tracking-wide">Open to full-time roles</span>
          </span>
          <span className="flex items-center gap-2">
            <PulsingDot />
            <span className="text-sm text-white/70 tracking-wide">Available for freelance projects</span>
          </span>
        </div>
  
        {/* Desktop: single pill, one dot */}
        <div className="hidden sm:flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <PulsingDot />
          <span className="text-sm text-white/70 tracking-wide">
            Open to full-time roles
            <span className="mx-2.5 text-white/20">·</span>
            Available for freelance projects
          </span>
        </div>
  
      </div>
    );
  }
  
  export default AvailableStrip;