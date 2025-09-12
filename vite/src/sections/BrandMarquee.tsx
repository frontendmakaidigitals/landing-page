import { cn } from "../lib/utils";
import Marquee from "../components/Marquee";
import "../index.css";
const reviews = [
  {
    name: "Biz-Growth",
    img: "Biz-Growth.png",
    color: "#DCE4C9",
  },
  {
    name: "Brownstone",
    img: "Brownstone.png",
    color: "#FEF1E6",
  },
  {
    name: "CraftDesk",
    img: "CD.png",
    color: "#F8EDE3",
  },
  {
    name: "Insight-Vision",
    img: "Insight-Vision.png",
    color: "#330000",
  },
  {
    name: "Interzens",
    img: "Interzens.png",
    color: "#1a0000",
  },
  {
    name: "Miles",
    img: "miles-logo.svg",
    color: "#C0D6E8",
  },
  {
    name: "Milestone",
    img: "Milestone-Logo.png",
    color: "#FBF9D1",
  },
  {
    name: "Qhtech",
    img: "QHTECH-Solution.png",
    color: "#40e0d0",
  },
  {
    name: "Zaavi",
    img: "Zaavi-Light.png",
    color: "#00335A",
  },
  {
    name: "Zaaviyan Contracting",
    img: "Zaaviyan Contracting.png",
    color: "#F3E9DC",
  },
  {
    name: "Zippro",
    img: "Zippro-Logo.png",
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
      <img className="w-auto" alt="" src={`/partner-brands/${img}`} />
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
