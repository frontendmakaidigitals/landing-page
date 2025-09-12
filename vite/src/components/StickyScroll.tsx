"use client";
export default function StickyScroll() {
  const steps = [
    {
      title: "Ads Strategy that is proven to work",
      img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creating & Running High Converting Ads",
      img: "https://images.unsplash.com/photo-1706516560059-b03772add416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creating & Running WhatsApp Retention Funnels",
      img: "https://images.unsplash.com/photo-1661862649743-2799867c32b0?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Increase In Revenue, Scalability & Bottom Line Revenue",
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="text-white bg-gradient-to-t from-red-950/30 via-black to-red-950/10  ">
      <div className="container hidden lg:flex justify-between max-w-6xl gap-10">
        <div className="sticky top-0 h-screen grid place-content-center max-w-xl">
          <button className="border rounded-full border-slate-400 w-fit px-4 py-[.5rem] text-sm">
            Our process
          </button>
          <h1 className="text-5xl font-medium tracking-tight leading-[120%] mt-2">
            This is what you get when working with Spok Digital
          </h1>
          <a href={"https://spok.digital/contact-us-1/"}>
            <button className="relative mt-5 cursor-pointer h-12 px-6 rounded-lg overflow-hidden transition-all duration-500 group">
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
                <span className="text-sm capitalize lg:text-md font-semibold bg-gradient-to-b from-red-100 to-red-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.6)] tracking-tight">
                  Apply to work with us
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-red-900/30 via-red-400/20 to-red-900/30 group-hover:opacity-100 rounded-lg"></div>
            </button>
          </a>
        </div>
        <div className="grid gap-2">
          {steps.map((step, index) => (
            <figure
              key={index}
              className="sticky top-0 h-screen grid place-content-center"
            >
              <article
                className={`bg-white/10 backdrop-blur-md border border-white/20 h-auto w-[26rem] rounded-xl p-4 grid  gap-4 ${
                  index % 2 === 0 ? "rotate-6" : "-rotate-6"
                }`}
              >
                <div className="w-full h-[280px] overflow-hidden rounded-lg mx-auto">
                  <img src={step.img} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bg-red-400  rounded-lg px-3 py-[.3rem] text-sm">
                    step {index + 1}
                  </span>
                  <h1 className="text-xl mb-2 mt-2 font-semibold text-white">
                    {step.title}
                  </h1>
                </div>
              </article>
            </figure>
          ))}
        </div>
      </div>

      <div className="container lg:hidden p-5 max-w-6xl gap-10">
        <div className=" grid place-content-center max-w-xl">
          <button className="border rounded-full border-slate-400 w-fit px-4 py-[.5rem] text-sm">
            Our process
          </button>
          <h1 className="text-5xl font-medium tracking-tight leading-[120%] mt-2">
            This is what you get when working with Spok Digital
          </h1>
          <a href={"https://spok.digital/contact-us-1/"}>
            <button className="relative mt-5 cursor-pointer h-12 px-6 rounded-lg overflow-hidden transition-all duration-500 group">
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
                <span className="text-sm capitalize lg:text-md font-semibold bg-gradient-to-b from-red-100 to-red-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.6)] tracking-tight">
                  Apply to work with us
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-red-900/30 via-red-400/20 to-red-900/30 group-hover:opacity-100 rounded-lg"></div>
            </button>
          </a>
        </div>
        <div className="grid mt-14 gap-12 ">
          {steps.map((step, index) => (
            <figure key={index} className="top-0 grid place-content-center">
              <article
                className={`bg-white/10 backdrop-blur-md border border-white/20 w-full rounded-xl p-4 grid  gap-4 ${
                  index % 2 === 0 ? "rotate-0" : "-rotate-0"
                }`}
              >
                <div className="w-full h-[280px] overflow-hidden rounded-lg mx-auto">
                  <img src={step.img} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bg-red-400  rounded-lg px-3 py-[.3rem] text-sm">
                    step {index + 1}
                  </span>
                  <h1 className="text-xl mb-2 mt-2 font-semibold text-white">
                    {step.title}
                  </h1>
                </div>
              </article>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
