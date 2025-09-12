import React from "react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img src={`/Logo.png`} className={cn(`w-44`, className)} alt={"logo"} />
  );
};

export default Logo;
