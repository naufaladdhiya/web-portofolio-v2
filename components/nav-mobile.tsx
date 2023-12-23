"use client";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { FolderClosed, Home, Menu, User } from "lucide-react";
import { Button } from "./ui/button";

import Link from "next/link";
import { useState } from "react";
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

const NavMobile = () => {
  const pathname = usePathname();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <div
      className={cn(
        "hidden w-full border border-x-0 border-b-slate-500 h-20 mb-6",
        isMobile && "block"
      )}
    >
      <div className="flex justify-between items-center p-6 text-neutral-800 dark:text-neutral-300">
        <div>
          <h1>Naufal Addhiya</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <ModeToggle />
          <Menu className="cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      <div
        className={cn(
          "fixed w-1/2 top-1 right-0 h-full z-50 dark:bg-[#1F1F1F]",
          showMenu ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300 ease-in-out"
        )}
      >
        <div className="flex flex-col justify-center z-50 px-5 relative mt-24">
          <Menu
            className="cursor-pointer absolute right-5 -top-16"
            onClick={toggleMenu}
          />

          <Button>Profile Card</Button>

          <div className="flex justify-start mt-6 ml-2">
            <ModeToggle />
          </div>
          <div className={"w-full bg-slate-400 h-[1px] mt-4"} />
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
                onClick={toggleMenu}
              >
                <Link href={link.href}>
                  {link.icon}
                  <p className="font-medium text-sm ml-2 text-neutral-800 dark:text-neutral-300">
                    {link.title}
                  </p>
                </Link>
              </Button>
            ))}
            {/* <Button>Profile Card</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
