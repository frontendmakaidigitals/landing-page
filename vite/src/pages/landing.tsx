import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/brands";
import Nav from "./components/nav";
import ProcessSection from "./components/ProcessSteps";
import CaseStudy from "./components/CaseStudies";
import FAQ from "./components/FAQ";
import CTA from "./components/CTASection";
import VideoSection from "./components/Video-section";
import ProblemSection from "./components/ProblemSection";
import ExperienceSection from "./components/Experience-section";
import WhyChooseUs from "./components/WhyUsSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function Landing() {
  return (    
    <div className="bg-white relative">
      <div className="px-4 absolute w-full z-50 top-0 left-0 ">
        <Nav mode="dark" />
      </div>
      <HeroSection />
      <BrandsSection />
      <ProcessSection />
      <ProblemSection />
      <VideoSection />
      <CaseStudy />
      <ExperienceSection />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <CTA mode="light" />
      <Footer />
    </div>
  );
}
