"use client";

import { useRef, ElementRef } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

import Navigation from "../navigation";
import NavMobile from "../nav-mobile";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const mainRef = useRef<ElementRef<"main">>(null);

  return (
    <main
      ref={mainRef}
      className={cn(
        "h-full flex px-20 space-x-14 mt-9 dark:bg-[#1F1F1F]",
        isMobile && "px-10 space-x-0 mt-0"
      )}
    >
      <Navigation />
      <div
        className={cn(
          "flex-1 h-full overflow-y-auto hide-scrollbar "
          // isMobile && "mt-10"
        )}
      >
        <NavMobile />
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;
