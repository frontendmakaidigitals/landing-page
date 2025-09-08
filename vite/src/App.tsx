import HeroSection from "./sections/HeroSection";
import BrandMarquee from "./sections/BrandMarquee";
import Process from "./sections/Process";
import FAQ from "./sections/FAQ";
import Testimonial from "./sections/Testimonial";
import StickyScroll from "./components/StickyScroll";
import StackkingCard from "./components/StackingCard";
function App() {
  return (
    <main>
      <HeroSection />
      <BrandMarquee />
      <Process />
      <StickyScroll />
      <Testimonial />
      <StackkingCard />
      <FAQ />
    </main>
  );
}

export default App;
