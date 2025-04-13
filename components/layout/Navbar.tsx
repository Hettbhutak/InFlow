import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Shield, 
  User, 
  Home,
  Bus,
  Activity,
  BarChart2,
  Video,
  Map
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white w-full h-16 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center">
        <ScrollLink 
          to="top" 
          smooth={true} 
          duration={500}
          className="text-xl font-bold flex items-center cursor-pointer"
        >
          <Shield className="h-6 w-6 text-blue-500 mr-2" />
          <span className="text-blue-400">Inflow</span>
        </ScrollLink>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px]">
                <li>
                  <ScrollLink
                    to="fleet-overview"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
                  >
                    <Bus className="w-4 h-4" />
                    <span>Bus Fleet</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="analytics"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
                  >
                    <Activity className="w-4 h-4" />
                    <span>Analytics</span>
                  </ScrollLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
              <Video className="w-4 h-4 mr-2" />
              Monitoring
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px]">
                <li>
                  <ScrollLink
                    to="active-monitoring"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
                  >
                    <Video className="w-4 h-4" />
                    <span>Live Feed</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="bus-tracking"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
                  >
                    <Map className="w-4 h-4" />
                    <span>Bus Tracking</span>
                  </ScrollLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
