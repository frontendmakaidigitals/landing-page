import HeroSection from "./sections/HeroSection";
import BrandMarquee from "./sections/BrandMarquee";
import Process from "./sections/Process";
import FAQ from "./sections/FAQ";
import StickyScroll from "./components/StickyScroll";
import StackkingCard from "./components/StackingCard";
import Testimonial2 from "./sections/Testimonial2";
import Comparison from "./sections/Comparison";
import CTA from "./sections/CTA";
import Nav from "./Header/Nav";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Nav />
            <HeroSection />
            <BrandMarquee />
            <Process />
            <StickyScroll />
            <Comparison />
            <Testimonial2 />
            <StackkingCard />
            <FAQ />
            <CTA />
          </main>
        }
      />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
