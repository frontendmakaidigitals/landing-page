import React from "react";
import { LucideLinkedin } from "lucide-react";
import Logo from "../../Header/Logo";
import LogoLight from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D111D] text-gray-300 pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Logo img={LogoLight} />
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white mb-3">Links</h3>

          <div className=" space-y-2">
            <a className="block hover:text-white transition">Privacy Policy</a>
            <a className="block hover:text-white transition">
              Terms & Conditions
            </a>
            <a className="block hover:text-white transition">Refund Policy</a>
            <a className="block hover:text-white transition">Contact Us</a>
            <a className="block hover:text-white transition">Careers</a>
          </div>
        </div>

        {/* Slogan Section */}
        <div className="flex items-start">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            We Help eCommerce Brands Add{" "}
            <span className="text-white font-semibold">$1M–$3M</span>
            <br />
            Per Year In Additional Revenue Profitably.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-12"></div>

      {/* Bottom Copy */}
      <div className="relative z-10 text-center text-gray-400 text-sm">
        © Copyright 2025 – Spok digital
      </div>
    </footer>
  );
};

export default Footer;
