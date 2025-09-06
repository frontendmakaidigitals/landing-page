import { cn } from "../lib/utils";
import Marquee from "../components/Marquee";
import "../index.css";
const reviews = [
  {
    name: "facebool",
    img: "facebook.webp",
  },
  {
    name: "x",
    img: "X.png",
  },
  {
    name: "google",
    img: "google.webp",
  },
  {
    name: "microsoft",
    img: "Microsoft.png",
  },
  {
    name: "cisco",
    img: "cisco.png",
  },
  {
    name: "instagram",
    img: "Instagram.png",
  },
  {
    name: "facebool",
    img: "facebook.webp",
  },
  {
    name: "x",
    img: "X.png",
  },
  {
    name: "google",
    img: "google.webp",
  },
  {
    name: "microsoft",
    img: "Microsoft.png",
  },
  {
    name: "cisco",
    img: "cisco.png",
  },
  {
    name: "instagram",
    img: "Instagram.png",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-[200px] flex justify-center items-center cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="w-32" alt="" src={`/Logos/${img}`} />
    </figure>
  );
};

const BrandMarquee = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black from-[20%]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black from-[20%]"></div>
    </div>
  );
};

export default BrandMarquee;
