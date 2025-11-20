import { ButtonColorful } from "../../components/Button";
const CTA = ({ mode = "dark" }) => {
  const isDark = mode === "dark";

  return (
    <section className="my-16 p-4 lg:p-0">
      <div
        className={`container relative max-w-6xl rounded-lg border p-12 overflow-hidden transition-all duration-500
        ${
          isDark
            ? "border-slate-100/10 bg-gradient-to-br from-black via-zinc-900 to-black"
            : "border-slate-300/30 bg-gradient-to-br from-white via-slate-100 to-white"
        }`}
      >
        {/* Background Glow */}
        <div
          className="size-[200px] blur-[100px] rounded-full absolute right-0"
          style={{
            background: isDark
              ? "linear-gradient(135deg, #0757f7, #ec4899, #ef4444, #f70707)"
              : "linear-gradient(135deg, #ff8080, #ff5fa2, #ff3c3c)",
          }}
        />

        <div
          className={`absolute inset-0 z-10 rounded-3xl blur-3xl opacity-70
          ${
            isDark
              ? "bg-radial from-red-500/40 via-transparent to-transparent"
              : "bg-radial from-red-300/40 via-transparent to-transparent"
          }`}
        />

        {/* Text */}
        <h1
          className={`text-3xl relative font-[500] tracking-tight  z-10 lg:text-4xl max-w-xl text-center lg:text-start transition-all duration-500
          ${isDark ? "text-slate-50" : "text-slate-800"}`}
        >
          Assess Your Eligibility
        </h1>

        <p
          className={`mt-4 space-y-4 max-w-4xl text-center relative z-10 lg:text-start transition-all duration-500
          ${isDark ? "text-slate-100" : "text-slate-600"}`}
        >
          <span className="block">
            If you have a general inquiry, you can send it to our co-founder's
            email : <strong>info@spok.digital</strong>
          </span>
          <span className="block">
            We work with limited businesses who we can actually bring results
            and have long term relation. If you seriously want to explore what
            growth our team can bring to your brand, click the button below to
            schedule a 30 minutes call.
          </span>
          <span className="block">
            We're always excited to chat with passionate business owners.
          </span>
        </p>

        {/* Button */}
        <div className="flex relative z-10 mt-6 justify-center lg:justify-start w-full">
          <a href="https://spok.digital/contact-us-1/">
            <ButtonColorful label="Check here"></ButtonColorful>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
