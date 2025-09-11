import type { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderProgress,
} from "../components/Carousel";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const Testimonial2 = () => {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const imgPreview = [
    {
      name: "Alice Johnson",
      company: "Facebook",
      review:
        "This service completely changed the way we operate. Smooth and reliable!",
      img: "https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Michael Lee",
      company: "Manager, Google",
      review: "Fast, efficient, and user-friendly. Highly recommended.",
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
    {
      name: "Sophia Martinez",
      company: "CEO, Microsoft",
      review: "Their support team is amazing and always ready to help.",
      img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "David Kim",
      company: "Executive ,Cisco",
      review: "The onboarding was smooth and setup took just minutes.",
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
    {
      name: "Emma Brown",
      company: "Manager ,Instagram",
      review: "Our productivity has doubled since we started using this.",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "James Wilson",
      company: "Agent ,X (Twitter)",
      review: "A reliable platform we can always count on.",
      img: "https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
    {
      name: "Olivia Chen",
      company: "Agent, LinkedIn",
      review: "Great experience! The interface is clean and intuitive.",
      img: "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
      rating: 5,
    },
    {
      name: "Ethan Clark",
      company: "Agent, Adobe",
      review: "One of the best investments we’ve made for our business.",
      img: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Sophia Patel",
      company: "Agent, Netflix",
      review: "The performance is unmatched — it just works.",
      img: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
      rating: 5,
    },
    {
      name: "Daniel Rivera",
      company: "Agent, Amazon",
      review: "I’ve recommended this to all my colleagues — game changer!",
      img: "https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format",
      rating: 5,
    },
  ];

  return (
    <section className="">
      <div className=" py-12 max-w-7xl ml-auto">
        <div className="flex justify-between items-center pr-14">
          <h1 className=" text-5xl  mx-right max-w-xl font-[500] text-slate-50">
            What clients think about our services
          </h1>
          <div className="flex gap-3"></div>
        </div>
        <div className="mt-10">
          <Carousel className="bg-transparent" options={OPTIONS}>
            <SliderContainer className="gap-2">
              {imgPreview.map((img, index) => (
                <Slider
                  key={index}
                  className="w-4/5 flex flex-col justify-between bg-orange-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 sm:w-1/2 lg:w-2/5 xl:w-1/4 "
                >
                  <div>
                    {" "}
                    <div className="flex gap-1 text-yellow-500 mb-4">
                      {Array.from({ length: img.rating }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="italic text-lg text-gray-700 mb-3">
                      “{img.review}”
                    </blockquote>
                  </div>
                  <div>
                    <div className="mt-3 h-[300px] w-full overflow-hidden rounded-xl">
                      <img
                        src={img.img}
                        className="w-full h-full object-cover"
                        alt={img.name}
                      />
                    </div>
                    <p className="mt-6 font-[500]">{img.name}</p>
                    <p className="text-sm text-slate-600">{img.company}</p>
                  </div>
                </Slider>
              ))}
            </SliderContainer>
            <div className="flex justify-center py-2">
              <SliderProgress />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;
