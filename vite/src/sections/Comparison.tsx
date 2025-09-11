const Comparison = () => {
  const features = [
    { label: "Transparent pricing", us: true, others: false },
    { label: "24/7 customer support", us: true, others: false },
    { label: "Fast onboarding", us: true, others: false },
    { label: "Hidden fees", us: false, others: true },
    { label: "Complex setup", us: false, others: true },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl font-bold tracking-tight">
            Why Choose <span className="text-blue-600">Us</span> Over Others
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
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
              {features.map((f) => (
                <li
                  key={f.label}
                  className="flex justify-between px-6 py-4 text-gray-600 dark:text-gray-300"
                >
                  <span>{f.label}</span>
                  <span className="text-red-500 font-bold">
                    {f.others ? "✖️" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="rounded-2xl border border-blue-300 dark:border-blue-800 bg-white dark:bg-gray-950 shadow-lg">
            <div className="px-6 py-4 border-b border-blue-200 dark:border-blue-700 bg-blue-600 text-white rounded-t-2xl">
              <h3 className="text-lg font-semibold">Us</h3>
            </div>
            <ul className="divide-y divide-blue-100 dark:divide-blue-900">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="flex justify-between px-6 py-4 text-gray-700 dark:text-gray-200"
                >
                  <span>{f.label}</span>
                  <span className="text-green-500 font-bold">
                    {f.us ? "✅" : ""}
                  </span>
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
