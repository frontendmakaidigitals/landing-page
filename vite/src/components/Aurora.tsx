"use client";

import { cn } from "../lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-bg relative h-[100vh] w-full bg-black text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 animate-aurora"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, #7f1d1d 10%, #991b1b 15%, #b91c1c 20%, #1f1f1f 25%, #210101 30%)",
            backgroundSize: "300% 200%",
            opacity: 0.15, 
            filter: "blur(80px)",
            mixBlendMode: "screen", // black dominates, colors faint
          }}
        />
      </div>
    </div>
  );
};
