"use client";
import Bizgrowth from "../../assets/partner-brands/Biz-Growth.png";
import Brownstone from "../../assets/partner-brands/Brownstone.png";
import CraftDesk from "../../assets/partner-brands/CD.png";
import InsightVision from "../../assets/partner-brands/Insight-Vision.png";
import Interzens from "../../assets/partner-brands/Interzens.png";
import Miles from "../../assets/partner-brands/miles-logo.svg";
import Milestone from "../../assets/partner-brands/Milestone-Logo.png";
import QHTECH from "../../assets/partner-brands/QHTECH-Solution.png";
import Zaavi from "../../assets/partner-brands/Zaavi-Light.png";
import Zaaviyan from "../../assets/partner-brands/Zaaviyan Contracting.png";
import Zippro from "../../assets/partner-brands/Zippro-Logo.png";
const logos = [
  {
    name: "Biz-Growth",
    img: Bizgrowth,
    color: "#DCE4C9",
  },
  {
    name: "Brownstone",
    img: Brownstone,
    color: "#FEF1E6",
  },
  {
    name: "CraftDesk",
    img: CraftDesk,
    color: "#F8EDE3",
  },
  {
    name: "Insight-Vision",
    img: InsightVision,
    color: "#1a0000",
  },
  {
    name: "Interzens",
    img: Interzens,
    color: "#1a0000",
  },
  {
    name: "Miles",
    img: Miles,
    color: "#C0D6E8",
  },
  {
    name: "Milestone",
    img: Milestone,
    color: "#FBF9D1",
  },
  {
    name: "Qhtech",
    img: QHTECH,
    color: "#1a0000",
  },
  {
    name: "Zaavi",
    img: Zaavi,
    color: "#00335A",
  },
  {
    name: "Zaaviyan Contracting",
    img: Zaaviyan,
    color: "#F3E9DC",
  },
  {
    name: "Zippro",
    img: Zippro,
    color: "#ECEDB0",
  },
];

export default function BrandsSection() {
  return (
    <section className="py-24 relative">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-3">
        Join The <span className="text-red-500">100+ Brands</span> We Helped
        Scale
      </h2>
      <div className="w-24 h-[2px] bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-12"></div>

      {/* Glass Container */}
      <div
        className="
          mx-auto max-w-6xl p-10 rounded-3xl
          border border-slate-300/30 backdrop-blur-xl
        "
      >
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {logos.map((item, idx) => (
            <div
              key={idx}
              className="
                p-4 w-full h-32 rounded-2xl
                flex items-center justify-center
                transition-all duration-300 
                hover:-translate-y-1 
                shadow-md hover:shadow-xl cursor-pointer
              "
              style={{
                backgroundColor: item.color,
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="max-h-22 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* subtle spotlight */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,0,70,0.08),transparent_70%)]"></div>
    </section>
  );
}
