import { Shield, BarChart3, Users2, Layers } from "lucide-react";

const cardData = [
  {
    icon: <BarChart3 size={32} className="text-blue-300" />,
    title: "Smart Insights",
    desc: "Make confident decisions with real-time analytics designed to keep you ahead of the curve.",
  },
  {
    icon: <Layers size={32} className="text-purple-300" />,
    title: "Flexible Plans",
    desc: "Choose plans that scale with your brand’s needs for efficiency and growth.",
  },
  {
    icon: <Shield size={32} className="text-teal-300" />,
    title: "Secure & Reliable",
    desc: "Industry-grade encryption and security ensure every interaction stays protected.",
  },
  {
    icon: <Users2 size={32} className="text-green-300" />,
    title: "Dedicated Support",
    desc: "Human-first support team always available to guide you whenever you need help.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#0c0000] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Why clients choose us as their eCommerce Marketing Agency
          </h2>{" "}
          <p className="text-gray-300 max-w-md  mb-8">
            Designed for growing businesses who want clarity, speed, and
            reliability.
          </p>
          <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[230px] lg:h-[360px] object-cover"
              alt="Team"
            />
          </div>{" "}
        </div>

        {/* RIGHT SIDE — MAPPED CARDS */}
        <div className="flex flex-col gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                {card.icon}
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
