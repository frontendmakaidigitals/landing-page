"use client";
import React, { isValidElement, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

type AccordionContextType = {
  activeItems: string[];
  multiple?: boolean;
  onChangeIndex: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextType>({
  activeItems: [],
  multiple: false,
  onChangeIndex: () => {},
});

const useAccordion = () => React.useContext(AccordionContext);

export function AccordionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-1", className)}>{children}</div>
  );
}

export function AccordionWrapper({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function Accordion({
  children,
  multiple,
  defaultValue,
}: {
  children: ReactNode;
  multiple?: boolean;
  defaultValue?: string | string[];
}) {
  const [activeItems, setActiveItems] = React.useState<string[]>(
    multiple
      ? Array.isArray(defaultValue)
        ? defaultValue
        : defaultValue
        ? [defaultValue]
        : []
      : defaultValue
      ? Array.isArray(defaultValue)
        ? [defaultValue[0]]
        : [defaultValue]
      : []
  );

  function onChangeIndex(value: string) {
    setActiveItems((prev) => {
      if (!multiple) {
        return prev[0] === value ? [] : [value];
      }
      return prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
    });
  }

  return (
    <AccordionContext.Provider value={{ activeItems, multiple, onChangeIndex }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  const { activeItems } = useAccordion();
  const isActive = activeItems.includes(value);

  return (
    <div
      data-active={isActive || undefined}
      className={`rounded-lg overflow-hidden mb-2 ${
        isActive
          ? "active border-2 dark:border-[#656fe2] border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]"
          : "bg-transparent border-2 dark:hover:border-[#656fe2]"
      }`}
      data-value={value}
    >
      {React.Children.map(children, (child) =>
        isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              value,
              isActive,
            })
          : child
      )}
    </div>
  );
}

export function AccordionHeader({
  children,
  customIcon,
  className,
  value,
  isActive,
}: {
  children: ReactNode;
  customIcon?: boolean;
  className?: string;
  value?: string;
  isActive?: boolean;
}) {
  const { onChangeIndex } = useAccordion();

  return (
    <motion.div
      data-active={isActive || undefined}
      className={cn(
        `group p-4 cursor-pointer transition-all font-semibold dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center`,
        isActive
          ? "dark:bg-[#1e2a78] bg-[#F2F2F2]"
          : "dark:bg-[#11112b] bg-white",
        className
      )}
      onClick={() => value && onChangeIndex(value)}
    >
      {children}
      {!customIcon && (
        <ChevronDown
          className={cn(
            "transition-transform",
            isActive ? "rotate-180" : "rotate-0"
          )}
        />
      )}
    </motion.div>
  );
}

export function AccordionPanel({
  children,
  className,
  isActive,
}: {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}) {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto", overflow: "hidden" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className={cn("group dark:bg-white bg-[#F2F2F2]", className)}
        >
          <motion.article
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className={`p-3 bg-transparent text-black`}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
