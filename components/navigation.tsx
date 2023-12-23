"use client";
import { ElementRef, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Home, User, FolderClosed } from "lucide-react";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Navlink = {
  title: string;
  href: string;
  icon: JSX.Element;
};

const navlinks: Navlink[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    title: "About",
    href: "/about",
    icon: <User />,
  },
  {
    title: "Project",
    href: "/project",
    icon: <FolderClosed />,
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isResetting, setIsResetting] = useState(false);

  const sidebarRef = useRef<ElementRef<"aside">>(null);

  const resetWidth = () => {
    if (sidebarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        "h-full bg-background overflow-y-auto relative flex w-48 flex-col z-[9999] dark:bg-[#1F1F1F]",
        isResetting && "transition-all ease-in-out duration-300"
      )}
    >
      <div className="flex flex-col justify-center z-50">
        <Button>Profile Card</Button>

        <div className="flex justify-start mt-6 ml-2">
          <ModeToggle />
        </div>
        <div className="w-full bg-slate-400 h-[1px] mt-4" />
        <div className="mt-7 flex flex-col space-y-4 w-full">
          {navlinks.map((link, index) => (
            <Button
              key={index}
              asChild
              variant={`ghost`}
              size={`default`}
              className={cn(
                "focus:bg-secondary hover:scale-110 transition-transform",
                pathname === link.href && "bg-secondary"
              )}
            >
              <Link href={link.href}>
                {link.icon}
                <p className="font-medium text-sm ml-2 text-neutral-800 dark:text-neutral-300">
                  {link.title}
                </p>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
