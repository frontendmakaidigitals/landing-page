import { Check } from "lucide-react";

const Comparison = () => {
  const otherAgencies = [
    "Outsourced to inexperienced juniors",
    "Reactive communication",
    "Relies too much on discounts to drive revenue",
    "Treat you like a transaction",
    "Insanely slow service delivery",
  ];
  const spokDigital = [
    "Team of absolute experts with a track record",
    "Constant, proactive communication",
    "Profit Maximising Campaigns",
    "Treats you like a partner, not a client",
    "Guaranteed growth within the first week",
  ];

  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className=" text-4xl lg:text-5xl text-white font-bold tracking-tight">
            Why Choose <span className="text-red-600">Us</span> Over Others
          </h2>
          <p className="mt-3 text-gray-300 ">
            See how we stack up against the alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Others */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 shadow-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 rounded-t-2xl">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Others
              </h3>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {otherAgencies.map((f, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 px-6 py-4 text-gray-600 dark:text-gray-300"
                >
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="rounded-2xl border border-orange-50  relative shadow-lg overflow-hidden">
            <img
              src={"/noise.png"}
              className="w-full h-full object-cover scale-[1.3] absolute inset-0"
            />

            <div className="px-6 relative z-10 py-4 border-b border-red-100  bg-orange-50 text-white rounded-t-2xl">
              <img
                src={
                  "https://spok.digital/wp-content/uploads/2025/06/Screenshot-2023-09-19-at-11.06.38-PM-1.png"
                }
                className="w-36 scale-[1.2] ml-3 "
              />
            </div>
            <ul className="relative z-10 divide-y divide-orange-100">
              {spokDigital.map((f, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 px-6 py-4 text-gray-50 "
                >
                  <Check className="text-green-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
