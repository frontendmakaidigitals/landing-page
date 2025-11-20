import { ButtonColorful } from "../../components/Button";
export default function CaseStudyAwesome() {
  return (
    <section className="relative w-full px-6 py-24 bg-neutral-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-100 to-neutral-200" />

      {/* Subtle glass strip top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/60 backdrop-blur-xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Headlines */}
        <h3 className="text-sm tracking-widest text-neutral-500 font-semibold uppercase">
          Case Study
        </h3>

        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-neutral-800">
          F&B Industry, Wine Aggregator:
        </h2>

        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-neutral-900">
          $111,000 in spends <span className="text-blue-600">→</span> $2,500,000
          in revenue
        </h1>

        {/* Layout */}
        <div
          className="
      flex flex-col lg:flex-row 
      items-center lg:items-start 
      gap-10 lg:gap-14 mt-16
    "
        >
          {/* Image */}
          <img
            src="https://www.brandslane.co/hosted/images/b6/2bbc20876742f9832435da277dfbc1/Screenshot-2021-04-25-at-1.56.32-AM.png"
            alt="Case study chart"
            className="
          w-full 
          max-w-md sm:max-w-lg lg:max-w-xl 
          h-auto 
          object-contain opacity-95
        "
          />

          {/* Right Content */}
          <div className="flex flex-col justify-start max-w-xl">
            <h3 className="text-lg font-semibold text-neutral-800">
              Work Brief:
            </h3>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              The client's business was launched in 2004 with the mission of
              making the world’s finest wines easily accessible to wine lovers.
            </p>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              Before joining us, they averaged ~$70k/month revenue. After
              testing, optimizing, and deep customer insights, they scaled to
              $300k+/month.
            </p>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              Seasonal delivery challenges required expansion and optimization.
              With our strategic support, they achieved predictable scaling.
            </p>

            <ButtonColorful className="w-fit mt-6 px-7" label="Read more" />
          </div>
        </div>
      </div>
    </section>
  );
}
