import { cn } from "../lib/utils";
import Marquee from "../components/Marquee";
import "../index.css";
import Bizgrowth from "../assets/partner-brands/Biz-Growth.png";
import Brownstone from "../assets/partner-brands/Brownstone.png";
import CraftDesk from "../assets/partner-brands/CD.png";
import InsightVision from "../assets/partner-brands/Insight-Vision.png";
import Interzens from "../assets/partner-brands/Interzens.png";
import Miles from "../assets/partner-brands/miles-logo.svg";
import Milestone from "../assets/partner-brands/Milestone-Logo.png";
import QHTECH from "../assets/partner-brands/QHTECH-Solution.png";
import Zaavi from "../assets/partner-brands/Zaavi-Light.png";
import Zaaviyan from "../assets/partner-brands/Zaaviyan Contracting.png";
import Zippro from "../assets/partner-brands/Zippro-Logo.png";
const reviews = [
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
    color: "#330000",
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
    color: "#40e0d0",
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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2, reviews.length);

const ReviewCard = ({ img, color }: { img: string; color: string }) => {
  return (
    <figure
      style={{ backgroundColor: color }}
      className={cn(
        "relative w-[130px] p-3 flex justify-center items-center cursor-pointer overflow-hidden rounded-xl",
        " border border-slate-50/30"
      )}
    >
      <img className="w-auto" alt="" src={img} />
    </figure>
  );
};

const BrandMarquee = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background pb-10 lg:py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 lg:w-1/2 bg-gradient-to-r from-black from-[20%]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 lg:w-1/2 bg-gradient-to-l from-black from-[20%]"></div>
    </div>
  );
};

export default BrandMarquee;
