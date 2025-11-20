import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "VP, Figma",
    text: `Spacely has been invaluable to me for what we do in our office. 
           I highly recommend it to anyone looking for speed without compromising with quality.`,
    avatar:
      "https://images.unsplash.com/photo-1685688852738-9ad14dbd3d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Sophia Miller",
    role: "Founder, Nova",
    text: `Their workflow dramatically improved our productivity. 
           The clarity and execution were unmatched.`,
    avatar:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Aaron Smith",
    role: "CTO, Qube",
    text: `A game-changer for our internal processes. 
           The detailed insights helped us scale efficiently.`,
    avatar:
      "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "John Doe",
    role: "VP, Figma",
    text: `Spacely has been invaluable to me for what we do in our office. 
           I highly recommend it to anyone looking for speed without compromising with quality.`,
    avatar:
      "https://images.unsplash.com/photo-1685688852738-9ad14dbd3d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Sophia Miller",
    role: "Founder, Nova",
    text: `Their workflow dramatically improved our productivity. 
           The clarity and execution were unmatched.`,
    avatar:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Aaron Smith",
    role: "CTO, Qube",
    text: `A game-changer for our internal processes. 
           The detailed insights helped us scale efficiently.`,
    avatar:
      "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      setScrollLeft(el.scrollLeft);
      setMaxScroll(el.scrollWidth - el.clientWidth);
    };

    onScroll(); // initialize
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div
        className="
    w-full min-h-[500px] lg:min-h-[70dvh] rounded-lg bg-[#EFF4FF] backdrop-blur-xl 
    border border-white/70 
    p-6 sm:p-12 
    relative
  "
      >
        {/* Soft grid background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/square-grid.png')] opacity-[0.04] pointer-events-none rounded-3xl"></div>

        {/* Large quote mark */}
        <div className="text-5xl sm:text-7xl text-gray-500 mb-4 sm:mb-6 leading-none">
          “
        </div>

        {/* Testimonial text */}
        <p
          className="
      text-2xl sm:text-4xl md:text-5xl 
      text-center text-gray-700 font-light 
      leading-snug transition-all duration-300 px-2
    "
        >
          {testimonials[active].text.split(" ").map((word, index) =>
            [
              "invaluable",
              "recommend",
              "productivity.",
              "insights",
              "speed",
            ].includes(word) ? (
              <span key={index} className="text-red-600 font-medium">
                {word + " "}
              </span>
            ) : (
              word + " "
            )
          )}
        </p>

        {/* Name + role */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-600 font-semibold text-base sm:text-lg">
            {testimonials[active].name}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            {testimonials[active].role}
          </p>
        </div>

        {/* Avatar Dock */}
        <div
          className="
    absolute bottom-6 sm:bottom-10 
    left-1/2 -translate-x-1/2 w-full lg:w-auto
  "
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative w-full">
            {/* LEFT GRADIENT */}
            {scrollLeft > 5 && (
              <div className="absolute left-0 top-0 z-40 h-full w-10 bg-gradient-to-r from-gray-900/50 to-transparent pointer-events-none" />
            )}

            {/* RIGHT GRADIENT */}
            {scrollLeft < maxScroll - 5 && (
              <div className="absolute right-0 z-40 top-0 h-full w-10 bg-gradient-to-l from-gray-900/50 to-transparent pointer-events-none " />
            )}

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              className="
        flex gap-4 sm:gap-6 
        max-sm:overflow-x-auto 
        max-sm:flex-nowrap 
        max-sm:pr-4 
        no-scrollbar
      "
            >
              {testimonials.map((t, index) => {
                const isMobile =
                  typeof window !== "undefined" && window.innerWidth < 640;

                const isHovered = hovered === index;
                const dist =
                  hovered !== null ? Math.abs(hovered - index) : null;

                let scaleClass = "scale-100";
                let shiftClass = "";

                if (!isMobile && hovered !== null) {
                  if (dist === 0) scaleClass = "scale-[1.35]";
                  else if (dist === 1) scaleClass = "scale-[1.18]";
                  else scaleClass = "scale-95 opacity-60";

                  if (!isHovered) {
                    if (index < hovered) shiftClass = "-translate-x-1";
                    if (index > hovered) shiftClass = "translate-x-1";
                  }
                }

                return (
                  <button
                    key={t.id}
                    onMouseEnter={() => !isMobile && setHovered(index)}
                    onClick={() => setActive(index)}
                    className={`
              relative cursor-pointer transition-all duration-300 ease-out
              shrink-0
              ${scaleClass} ${shiftClass}
            `}
                  >
                    <div className="size-20 rounded lg:rounded-2xl overflow-hidden sm:size-16">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full  object-cover border border-white/40 shadow-xl"
                      />
                    </div>

                    {active === index && (
                      <div className="absolute inset-0 rounded lg:rounded-2xl border border-red-300/60 shadow-[0_0_18px_rgba(255,0,0,0.55)] pointer-events-none"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
