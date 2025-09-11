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
      <div className="container flex justify-between max-w-6xl gap-10">
        <div className="sticky top-0 h-screen grid place-content-center max-w-xl">
          <button className="border rounded-full border-slate-400 w-fit px-4 py-[.5rem] text-sm">
            Our process
          </button>
          <h1 className="text-5xl font-medium tracking-tight leading-[120%] mt-2">
            This is what you get when working with Spok Digital
          </h1>
          <button className="w-fit bg-red-500 px-3 py-[.5rem] mt-3 rounded-xl">
            Apply to work with us
          </button>
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
    </section>
  );
}
