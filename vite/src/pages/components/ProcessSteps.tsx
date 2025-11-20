"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Bringing out Brand's right message",
    text: "We don’t immediately take over your marketing — we first understand your brand deeply, shaping a message that turns your audience into long-term loyal customers.",
  },
  {
    id: "02",
    title: "Establishing the pillars of long term marketing",
    text: "At any stage — early or scaling — we build a strong foundation backed by data so every future effort has stability, predictability, and the power to scale without stress.",
  },
  {
    id: "03",
    title: "Growth",
    text: "We implement a full-scale execution plan with strategy, optimization, and scalable opportunities—moving you rapidly toward consistent revenue.",
  },
  {
    id: "04",
    title: "Scaling Operations",
    text: "Once growth systems are validated, we scale your marketing operations to unlock higher acquisition volume without sacrificing ROI.",
  },
  {
    id: "05",
    title: "Optimization & Automation",
    text: "We streamline workflows, automate repetitive tasks, and continuously optimize campaigns to ensure sustained and predictable performance.",
  },
  {
    id: "06",
    title: "Long-Term Retention Engine",
    text: "We build a retention-focused ecosystem that keeps customers loyal, increases lifetime value, and turns your brand into a long-term market leader.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const inview = useInView(containerRef, { once: true });
  return (
    <section className="relative px-4 py-32 overflow-hidden">
      {/* Heading */}
      <motion.h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight max-w-4xl mx-auto">
        How our process builds a foundation for <br />
        <span className="text-red-500">predictable & aggressive growth</span>,
        without any limit to your revenue
      </motion.h2>

      {/* Steps */}
      <div
        ref={containerRef}
        className="mt-28 max-w-5xl mx-auto space-y-24 relative z-10"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: inview ? 200 : 0 }}
            animate={{ opacity: 1, y: inview ? 0 : 200 }}
            transition={{ duration: 0.7, delay: i * 0.14 }}
            className={`relative  flex flex-col md:flex-row items-start gap-8 md:gap-14 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Number */}
            <motion.div
              className="text-6xl md:text-7xl font-[600] 
              bg-gradient-to-b from-gray-800 to-gray-500 
              bg-clip-text text-transparent tracking-tight select-none"
            >
              {step.id}
            </motion.div>

            {/* Card */}
            <div
              className="
                w-full p-8 rounded-3xl
                bg-white/50 backdrop-blur-xl
                border border-black/5
                shadow-md
                transition-all duration-500
              "
            >
              <h3 className="text-2xl font-[500] mb-3">{step.title} –</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[150px] bg-red-500/10 blur-[120px] -z-10"></div>
    </section>
  );
}
