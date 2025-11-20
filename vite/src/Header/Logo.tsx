import React from "react";
import { cn } from "../lib/utils";
interface LogoProps {
  className?: string;
  img?: string;
}

const Logo: React.FC<LogoProps> = ({ className, img = "/assets/Logo.png" }) => {
  return <img src={img} className={cn(`w-44`, className)} alt={"logo"} />;
};

export default Logo;
