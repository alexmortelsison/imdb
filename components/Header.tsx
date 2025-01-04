import React from "react";
import HeaderItem from "./HeaderItem";
import { Home, Info } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center max-w-6xl mx-auto p-4 justify-between">
      <div className="text-sm flex gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={Home} />
        <HeaderItem title={"About"} address={"/about"} Icon={Info} />
      </div>
      <div className="flex items-center text-sm">
        <DarkModeSwitch />
        <span className="ml-3 font-bold text-lg bg-amber-600 px-2 rounded-lg">
          IMDB
        </span>
        <p className="font-semibold hidden md:inline ml-1">Clone</p>
      </div>
    </div>
  );
}
