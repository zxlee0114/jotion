"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex items-center w-full p-6 bg-background dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="w-full flex-between md:justify-end gap-x-2 md:ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
