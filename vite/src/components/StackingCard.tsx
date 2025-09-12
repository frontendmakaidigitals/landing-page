import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import { AuroraBackground } from "./Aurora";
const projects = [
  {
    title: "Scaled From Scratch To ₹8 Crore ARR In Just 1 Year",
    description:
      "We started working together in November 2022 focusing on direct response offers. Initially, the offers were lame and not so salesy. So we focused on generating powerful offers that would alter the whole industry leaders & that’s how we scaled them to ₹8 Crore in just 12 months with an insane ads strategy.",
    src: "rock.jpg",
    link: "https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI=",
  },
  {
    title: "Doubled the ad revenue from ₹80 Lakhs/month to ₹1.5 Crore/Month",
    description:
      "An already established men’s apparel brand, could not scale beyond a point. We came in, solved the ad account structural problem (considering they had 22 product categories) while maintaining the ROAS of 3.5X & scaled them to ₹1.5 CR MRR in just 3 months. ",
    src: "rock.jpg",
    link: "https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI=",
  },
  {
    title: "Skyrocketed Revenue To 450K AED Using Omnipresence Strategy",
    description:
      "This brand just did Google Ads when we started working with them. We quickly recognized the gaps of not marketing enough on other platforms. Within a month of executing the omnipresence strategy, their revenue jumped from 100K AED per month to 200K per month & we scaled them to 450K per month within 8 months.",
    src: "rock.jpg",
    link: "https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI=",
  },
  {
    title: "From ₹4 Lakhs/Month To ₹50 Lakhs/Month In Just 1 Year",
    description:
      "Sustainably scaled this brand’s revenue using an acquisition + retention strategy (WhatsApp Marketing). WhatsApp accounted for 25% of the sales while increasing the LTV by 200%. Partnering up with influencers and creators helped decrease the CAC & maintain the ROAS at scale.",
    src: "rock.jpg",
    link: "https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI=",
  },
];
export default function StackkingCard() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-black mt-24 relative" ref={container}>
      <AuroraBackground className="absolute inset-0 w-full h-full" />
      <h1 className="text-4xl lg:text-5xl relative z-10 font-[600] text-center max-w-4xl mx-auto text-white">
        Here Are <span className="text-red-500">Some Results</span> We Have
        Achieved For Industry Leaders
      </h1>
      <motion.section className="text-white w-full ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project?.link}
              title={project?.title}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </motion.section>
    </section>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80dvh] lg:h-screen flex items-center justify-center sticky top-0 p-3 lg:p-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex  bg-white/20 backdrop-filter backdrop-blur-2xl  flex-col relative -top-[25%] h-auto lg:h-[450px] w-full lg:w-[60%] rounded-md px-5 py-4 lg:px-10 lg:py-6 origin-top`}
      >
        <div className={`flex flex-col-reverse lg:flex-row h-full mt-5 gap-10`}>
          <div className={`w-full lg:w-[40%] relative top-[10%]`}>
            <h2 className="text-2xl lg:text-3xl font-semibold">{title}</h2>
            <p className=" mt-3">{description}</p>
          </div>

          <div
            className={`relative w-full lg:w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div className={`w-full h-full `}>
              <img
                src={url}
                alt="image"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
