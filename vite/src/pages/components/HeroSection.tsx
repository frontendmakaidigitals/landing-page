import EtherealBeamsHero from "../components/bg";
import { ButtonColorful } from "../../components/Button";
export default function HeroSection() {
  return (
    <section className="relative px-4 min-h-[780px] py-12 flex justify-center items-center  overflow-hidden text-slate-50">
      <div className="absolute z-10 w-full h-full">
        <EtherealBeamsHero />
      </div>
      <div className="max-w-6xl  relative z-10 mx-auto  text-center">
        {" "}
        <h1 className="text-2xl lg:text-5xl font-semibold mb-9 lg:leading-14">
          We Grow eCommerce Brands Over ₹1Cr Monthly Revenue With Our Integrated
          Ads, Performance Creatives, and Retention Marketing!
        </h1>
        <p className="text-lg lg:text-xl max-w-4xl mx-auto  mb-10">
          We're an elite e-commerce agency that is top-tier Partner with Meta
          for creating revenue over ₹350,00,00,000 for partner brands.
        </p>
        <p className="text-md lg:text-lg max-w-5xl mx-auto">
          A creative lead Advertising Agency that focuses on your problem to
          acquire customers aggressively fast, at profitable cost and retain
          them longer, so that you can aim for higher revenue than the current
          Goals.
        </p>
        <ButtonColorful className="mt-12 text-md lg:text-xl px-6 h-14" label="How We scale Brands in 12 months"></ButtonColorful>
      </div>
    </section>
  );
}
