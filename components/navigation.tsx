"use client";

import Link from "next/link";
import { Home, User, FolderClosed } from "lucide-react";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

import Navmenu from "./navmenu";

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
  return (
    <aside className="group/sidebar h-full bg-background overflow-y-auto relative flex w-48 flex-col z-[9999] dark:bg-[#1F1F1F]">
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
              className="focus:bg-secondary hover:scale-110 transition-transform"
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
