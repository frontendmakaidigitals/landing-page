import { Zap } from "lucide-react";
import { useAnimateText } from "../hooks/useAnimateText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const span = marqueeRef.current;
    const content = span.innerHTML;

    // Duplicate content 2-3 times for seamless scroll
    span.innerHTML = content + "" + content + "" + content;

    const totalWidth = span.offsetWidth / 3; // width of one copy

    gsap.to(span, {
      x: -totalWidth,
      duration: 9, // adjust speed
      ease: "linear",
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    if (!heroImgRef.current) return;

    gsap.to(heroImgRef.current, {
      scale: 1.2, // maximum zoom when scrolling
      ease: "none",
      scrollTrigger: {
        trigger: ".heroContainer",
        start: "top top",
        end: "bottom top",
        scrub: true, // smooth animation linked to scroll
      },
    });
  }, []);

  return (
    <section className="heroContainer relative">
      <div className="absolute overflow-hidden inset-0 w-full h-[60dvh] lg:h-full">
        <img
          ref={heroImgRef}
          src={"/heroImg.png"}
          alt={"hero-bg"}
          className={"w-full h-full object-cover"}
        />
      </div>
      <div className="max-w-4xl p-3 lg:p-0 h-[100vh] text-center container flex flex-col items-center justify-center">
        <h1 className="relative overflow-hidden w-48 h-10 px-5 text-sm bg-white/40 backdrop-blur-lg backdrop-filter rounded-full">
          <span
            ref={marqueeRef}
            className="inline-flex text-white items-center gap-2 -translate-y-1/2 top-1/2 absolute whitespace-nowrap"
          >
            <Zap className="fill-white text-white size-4 flex-shrink-0" />
            7-Day FREE TRIAL
          </span>
        </h1>
        <h2 className="relative z-10 text-4xl lg:text-5xl mt-5 font-[700] leading-[1.1]">
          <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text">
            We Make Your Business An Extra{" "}
          </span>

          <span className="bg-gradient-to-r from-red-400 via-red-50 to-red-400 text-transparent bg-clip-text">
            $30,000
          </span>

          <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text">
            {" "}
            to{" "}
          </span>

          <span className="bg-gradient-to-r from-red-400 via-red-50 to-red-400 text-transparent bg-clip-text">
            $300,000+
          </span>

          <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text">
            {" "}
            MRR in 90 Days
          </span>
        </h2>
        <h3 className="mt-5 text-sm lg:text-md relative z-10 overflow-hidden heroPara text-[#FFE8DB]">
          Generate a predictable & sustainable revenue stream for your business
          while achieving maximum scalability!
        </h3>
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
        <div className="flex mt-3 items-center gap-2 relative z-10">
          <Rating />
          <div className="flex items-center gap-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Star
                key={idx}
                className="stroke-yellow-500 size-5 fill-yellow-500"
              />
            ))}
          </div>
        </div>
        <p className="text-slate-300 font-[100] relative z-10">
          Rated 4.9/5 by 50+ happy brands.
        </p>
        <div className="grid relative mt-5 z-10 grid-cols-2 place-items-center ">
          <img src={"/shopify-partner.png"} alt={""} className="w-48" />
          <img src={"/meta.png"} alt={""} className="w-32" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const Rating = () => {
  return (
    <div className="flex justify-center mt-3 mb-4">
      <div className="flex -space-x-4">
        {[
          "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ].map((user, idx) => (
          <div
            key={idx}
            className="relative flex size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-background grayscale"
          >
            <img
              src={user}
              alt={`user-${idx}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
