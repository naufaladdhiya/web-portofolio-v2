import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";

const NavMobile = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
          <Menu className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
