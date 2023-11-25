import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navmenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col space-y-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p>Hello World</p>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navmenu;
