const CTA = () => {
  return (
    <section className="my-16">
      <div className="container relative max-w-5xl rounded-lg border border-slate-400/30 p-12  bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
        <div
          className="absolute right top-1/2 w-lg -translate-y-1/2 inset-0 z-10 rounded-3xl 
    bg-radial from-red-500/40 via-transparent to-transparent 
    blur-3xl opacity-70"
        />
        <h1 className="text-slate-50 text-4xl max-w-xl">
          Let's get on a call and plan your best-selling campaign.
        </h1>
        <p className="text-slate-100 mt-2">
          If we don&apos;t deliver on our promise, you pay nothing and we will
          refund.
        </p>
        <button className="relative mt-4 h-10 px-6 rounded-lg overflow-hidden transition-all duration-500 group">
          {/* Outer gradient border */}
          <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-red-600 via-red-700 to-red-800">
            <div className="absolute inset-0 bg-red-900 rounded-lg opacity-80"></div>
          </div>

          {/* Inner bright layers */}
          <div className="absolute inset-[2px] bg-red-800 rounded-lg opacity-90"></div>
          <div className="absolute inset-[2px] bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-lg opacity-85"></div>
          <div className="absolute inset-[2px] bg-gradient-to-b from-red-600/50 via-red-700/80 to-red-800/50 rounded-lg opacity-90"></div>

          {/* Highlight glow */}
          <div className="absolute inset-[2px] bg-gradient-to-br from-red-400/20 via-red-700 to-red-900/60 rounded-lg"></div>
          <div className="absolute inset-[2px] shadow-[inset_0_0_20px_rgba(255,100,100,0.25),0_0_15px_rgba(255,50,50,0.4)] rounded-lg"></div>

          {/* Button text */}
          <div className="relative flex items-center justify-center gap-2">
            <span className="text-sm font-semibold bg-gradient-to-b from-red-200 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.6)] tracking-tight">
              Apply to work with us
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-red-900/30 via-red-400/20 to-red-900/30 group-hover:opacity-100 rounded-lg"></div>
        </button>
      </div>
    </section>
  );
};

export default CTA;
