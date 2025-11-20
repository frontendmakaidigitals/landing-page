import Logo from "../../Header/Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";
import LogoLight from "../../assets/Logo.png";
import LogoDark from "../../assets/Logo-black.png";
interface NavProps {
  mode?: "dark" | "light";
}

const Nav = ({ mode = "dark" }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textColor = mode === "dark" ? "text-white" : "text-black";
  const bgHomeColor = mode === "dark" ? "bg-red-500/70" : "bg-red-500";

  const menuLinks = [
    { label: "Home", link: "https://spok.digital/" },
    { label: "D2C Services", link: "https://spok.digital/services-2/" },
    { label: "Portfolio", link: "https://spok.digital/single-project/" },
    { label: "Contact Us", link: "https://spok.digital/contact-us-1/" },
  ];

  return (
    <header className="py-5 ">
      <div className="container flex justify-between items-center">
        <Logo img={mode === "dark" ? LogoLight : LogoDark} />

        <ul className="hidden border p-1 rounded-full border-white/10 bg-white/8  lg:flex items-center gap-2">
          {menuLinks.map((menu, idx) => (
            <li
              key={idx}
              className={cn(
                `px-4 py-[.6rem] rounded-full  ${textColor}`,
                menu.label.toLowerCase() === "home"
                  ? `${bgHomeColor} backdrop-blur-xl text-white `
                  : "hover:bg-red-500/30"
              )}
            >
              <a href={menu.link}>{menu.label}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(true)}
          className={cn(
            "px-4 lg:hidden py-[.4rem] rounded-full backdrop-filter backdrop-blur-lg",
            mode === "dark" ? "bg-white/20" : "bg-black/10"
          )}
        >
          <Menu
            className={mode === "dark" ? "text-white" : "text-black"}
            size={26}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={cn(
              "w-screen lg:hidden h-screen fixed top-0 left-0 z-20",
              mode === "dark" ? "bg-black" : "bg-white"
            )}
            animate={{ y: "0%" }}
            initial={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <div className="container py-5 px-3 flex justify-between items-center">
              <Logo />
              <button
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-[.4rem] rounded-full backdrop-filter backdrop-blur-lg",
                  mode === "dark" ? "bg-red-500/40" : "bg-red-300/40"
                )}
              >
                <X
                  className={mode === "dark" ? "text-white" : "text-black"}
                  size={26}
                />
              </button>
            </div>

            <ul className="container divide-red-100/40 divide-y px-3 py-5">
              {menuLinks.map((menu, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "text-lg py-5",
                    mode === "dark" ? "text-white" : "text-black"
                  )}
                >
                  <a
                    href={menu.link}
                    className="flex justify-between items-center w-full"
                  >
                    {menu.label}
                    <ArrowUpRight
                      className={mode === "dark" ? "text-white" : "text-black"}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
