import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
const projects = [
  {
    title: "Scaled From Scratch To ₹8 Crore ARR In Just 1 Year",
    description:
      "We started working together in November 2022 focusing on direct response offers. Initially, the offers were lame and not so salesy. So we focused on generating powerful offers that would alter the whole industry leaders & that’s how we scaled them to ₹8 Crore in just 12 months with an insane ads strategy.",
    src: "rock.jpg",
    link: "https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI=",
  },
  {
    title: "Scaled From Scratch To ₹8 Crore ARR In Just 1 Year",
    description:
      "We started working together in November 2022 focusing on direct response offers. Initially, the offers were lame and not so salesy. So we focused on generating powerful offers that would alter the whole industry leaders & that’s how we scaled them to ₹8 Crore in just 12 months with an insane ads strategy.",
    src: "rock.jpg",
    link: "https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI=",
  },
  {
    title: "Scaled From Scratch To ₹8 Crore ARR In Just 1 Year",
    description:
      "We started working together in November 2022 focusing on direct response offers. Initially, the offers were lame and not so salesy. So we focused on generating powerful offers that would alter the whole industry leaders & that’s how we scaled them to ₹8 Crore in just 12 months with an insane ads strategy.",
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
    <section className="bg-black" ref={container}>
      <section className="text-white   w-full bg-slate-950  ">
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
      </section>
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex bg-white/20 backdrop-filter backdrop-blur-lg  flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
      >
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className=" mt-3">{description}</p>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={url} alt="image" className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
