import Logo from "./Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/utils";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuLinks = [
    { label: "Home", link: "https://spok.digital/" },
    { label: "D2C Services", link: "https://spok.digital/services-2/" },
    { label: "Portfolio", link: "https://spok.digital/single-project/" },
    { label: "Contact Us", link: "https://spok.digital/contact-us-1/" },
  ];
  return (
    <header className="py-5 relative">
      <div className="container  px-3 flex justify-between items-center">
        <Logo />

        <ul className="flex items-center gap-6">
          {menuLinks.map((menu, idx) => (
            <li
              className={cn(
                `text-slate-50 px-3 py-[.4rem]`,
                menu.label.toLowerCase() === "home"
                  ? "bg-red-600 rounded-lg"
                  : ""
              )}
              key={idx}
            >
              <a className="" href={menu.link}>
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="px-4 block lg:hidden py-[.4rem] rounded-full bg-white/40 backdrop-filter backdrop-blur-lg"
        >
          <Menu className="text-white size-6" />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className=" w-screen lg:hidden  h-screen bg-black z-20 fixed top-0 left-0"
            animate={{ y: "0%" }}
            initial={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <div className="container py-5 px-3 flex justify-between items-center">
              <Logo />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="px-4 py-[.4rem] rounded-full bg-red-500/40 backdrop-filter backdrop-blur-lg"
              >
                <X className="text-white size-6" />
              </button>
            </div>
            <ul className="container divide-red-100/40 divide-y px-3 py-5 ">
              {menuLinks.map((menu, idx) => (
                <li className="text-white text-lg " key={idx}>
                  <a
                    href={menu.link}
                    className="flex  justify-between py-5 items-center w-full"
                  >
                    {menu.label}
                    <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
