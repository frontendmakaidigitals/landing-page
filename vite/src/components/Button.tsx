import { cn } from "../lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  align?: "left" | "right" | "center";
  children?: React.ReactNode;
}

export function ButtonColorful({
  className,
  label = "Explore Components",
  children,
  align = "center",
  ...props
}: ButtonColorfulProps) {
  return (
    <button
      className={cn(
        "relative cursor-pointer rounded h-10 px-4 overflow-hidden",
        "bg-zinc-900 dark:bg-zinc-100",
        "transition-all duration-200 group",
        className
      )}
      {...props}
    >
      {/* Gradient background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-red-500 via-red-500 to-pink-500",
          "opacity-60  group-hover:opacity-90",
          "blur transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div
        className={cn(
          `relative  flex items-center  gap-2`,
          align === "left" && "justify-start",
          align === "right" && "justify-end",
          align === "center" && "justify-center"
        )}
      >
        {children ? (
          children
        ) : (
          <>
            <span className="text-white transition-colors duration-300 group-hover:text-white dark:text-zinc-900">
              {label}
            </span>
            <span>
              {" "}
              <ArrowUpRight className="w-7 h-7 transition-colors duration-300 group-hover:text-white text-white/90 dark:text-zinc-900/90" />
            </span>
          </>
        )}
      </div>
    </button>
  );
}
