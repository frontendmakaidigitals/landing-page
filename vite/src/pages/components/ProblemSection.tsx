"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ButtonColorful } from "../../components/Button";
const problems = [
  {
    title: "Revenue or ROI Stuck?",
    desc: "Feels like your growth is slowing down even though the market isn't? A plateau usually means inefficiencies in strategy—not demand.",
    icon: "/icons/p1.svg",
  },
  {
    title: "Unclear Marketing Insights?",
    desc: "Reporting should guide decisions. If your team isn’t extracting real insights, you may be improving on the wrong levers.",
    icon: "/icons/p2.svg",
  },
  {
    title: "Traditional Agencies Not Enough?",
    desc: "Most agencies excel at visuals—not scalable growth. Your next revenue leap requires performance skillsets that many don’t possess.",
    icon: "/icons/p3.svg",
  },
];

export default function ProblemSection() {
  const containerRef = useRef(null);
  const inview = useInView(containerRef, { once: true });

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#f8f9fb]">
      {/* Ambient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div
        ref={containerRef}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 relative z-10"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="uppercase tracking-wider text-sm text-slate-600 font-medium">
              Problem
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-3">
              Is Your Brand Growing As Fast As It Should?
            </h2>

            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
              Growth shouldn’t feel unpredictable or stagnant. When your
              marketing engine is misaligned, it silently slows down your entire
              brand’s momentum.
            </p>
          </div>

          {/* Illustrative Image */}
          <div className="bg-slate-300 w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-lg">
            <motion.img
              src="/illustrations/thinking.png"
              alt="thinking"
              className="w-full h-full object-cover opacity-95 mt-6 sm:mt-10 drop-shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="p-6 rounded bg-white/30 backdrop-blur-md shadow border border-black/8 group"
              initial={{ opacity: 0, x: inview ? 40 : 0 }}
              whileInView={{ opacity: 1, x: inview ? 0 : 40 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-5">
                {/* Make icon box responsive */}
                <div className="w-24 h-20 sm:w-32 sm:h-24 md:w-48 md:h-28 rounded-lg bg-slate-300 flex items-center justify-center shadow-md">
                  <img src={p.icon} alt="" className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-900">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <a href="#">
            <ButtonColorful
              align="left"
              className="w-full h-12"
              label="Let’s Chat"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
