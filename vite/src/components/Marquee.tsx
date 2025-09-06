import { cn } from "../lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2, // usually 2 is enough to loop seamlessly
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative overflow-hidden p-2 [--duration:20s] [--gap:1rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 [gap:var(--gap)]",
          vertical ? "flex-col marquee-vertical" : "flex-row marquee",
          pauseOnHover && "pause-marquee",
          reverse && "reverse-marquee"
        )}
      >
        <div className="flex shrink-0 [gap:var(--gap)]">{children}</div>
      </div>
    </div>
  );
}
