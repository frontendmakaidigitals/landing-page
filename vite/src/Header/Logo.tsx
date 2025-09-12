import React from "react";
import { cn } from "../lib/utils";
import LogoImg from "../assets/Logo.png";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <img src={LogoImg} className={cn(`w-44`, className)} alt={"logo"} />;
};

export default Logo;
