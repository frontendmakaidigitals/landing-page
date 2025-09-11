import { Zap } from "lucide-react";
import { useAnimateText } from "../hooks/useAnimateText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MeshGradient from "../components/MeshGradient";
const HeroSection = () => {
  useAnimateText({
    trigger: ".heroContainer",
    selector: ".heroText1",
    type: "words, lines",
    duration: 0.8,
    stagger: 0.08,
    y: 150,
  });
  useAnimateText({
    trigger: ".heroContainer",
    selector: ".heroPara",
    type: "words, lines",
    duration: 0.6,
    stagger: 0.05,
    y: 150,
    delay: 0.9,
  });

  const marqueeRef = useRef<HTMLDivElement | null>(null);

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
  return (
    <section className="heroContainer relative">
      <div className="absolute inset-0 w-full h-full">
        <MeshGradient />
      </div>
      <div className="max-w-3xl h-[100vh] text-center container flex flex-col items-center justify-center">
        <h1 className="relative overflow-hidden w-48 h-10 px-5 text-sm bg-white/40 backdrop-blur-lg backdrop-filter rounded-full">
          <span
            ref={marqueeRef}
            className="inline-flex text-white items-center gap-2 -translate-y-1/2 top-1/2 absolute whitespace-nowrap"
          >
            <Zap className="fill-white text-white size-4 flex-shrink-0" />
            7-Day FREE TRIAL
          </span>
        </h1>
        <h2 className="text-5xl !overflow-hidden heroText1 text-[#FFE8DB] mt-5 font-[600]">
          We Make Your Business An Extra{" "}
          <span className="text-[#5682B1]">$30,000</span> to{" "}
          <span className="text-[#5682B1]">$300,000+</span> MRR in 90 Days, Or
          You Don&apos;t Pay!
        </h2>
        <h3 className="mt-5 overflow-hidden heroPara text-[#FFE8DB]">
          Generate a predictable & sustainable revenue stream for your business
          while achieving maximum scalability!
        </h3>

        <button className="relative mt-10 h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
          {/* Outer gradient border */}
          <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#4A8CFF] via-[#1A3D8C] to-[#1453B8]">
            <div className="absolute inset-0 bg-[#0B223F] rounded-lg opacity-80"></div>
          </div>

          {/* Inner bright layers */}
          <div className="absolute inset-[2px] bg-[#0F2B52] rounded-lg opacity-90"></div>
          <div className="absolute inset-[2px] bg-gradient-to-r from-[#123D6F] via-[#1C4E8A] to-[#123D6F] rounded-lg opacity-85"></div>
          <div className="absolute inset-[2px] bg-gradient-to-b from-[#4A8CFF]/50 via-[#1C4E8A]/80 to-[#1453B8]/50 rounded-lg opacity-90"></div>

          {/* Highlight glow */}
          <div className="absolute inset-[2px] bg-gradient-to-br from-[#80C3FF]/20 via-[#1A3D6F] to-[#1E5CB8]/60 rounded-lg"></div>
          <div className="absolute inset-[2px] shadow-[inset_0_0_20px_rgba(128,195,255,0.25),0_0_15px_rgba(74,140,255,0.4)] rounded-lg"></div>

          {/* Button text */}
          <div className="relative flex items-center justify-center gap-2">
            <span className="text-md font-semibold bg-gradient-to-b from-[#D0E9FF] to-[#80C3FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(128,195,255,0.6)] tracking-tight">
              Submit request
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#1E5CB8]/30 via-[#80C3FF]/20 to-[#1E5CB8]/30 group-hover:opacity-100 rounded-lg"></div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
