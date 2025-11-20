import React from "react";

const ExperienceSection = () => {
  const items = [
    {
      title: "We keep you accountable for growth",
      desc: "Our ambition is to not just make our clients the winner brands in their space, but be world class when it comes to growth and mindset too.",
    },
    {
      title: "Business Understanding & Support",
      desc: "If marketing numbers are not broken down into business understandings, the work is half done. We don’t settle at work half done.",
    },
    {
      title: "Unparalleled Communication Experience",
      desc: "Effective communication is what drives the business. We pride ourselves on fast responses and offering more calls than needed.",
    },
  ];

  return (
    <section className="py-20 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
          We don’t just offer results, our experience is better too
        </h2>

        <p className="text-slate-500 mt-4 text-lg">
          How much valuable are just results if the work experience is not
          smooth and delightful?
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl shadow border border-slate-200/50 backdrop-blur-lg 
            bg-white/60 
            "
          >
            <h3 className="text-xl font-semibold text-red-900">{item.title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
