import React from "react";
import HeaderItem from "./HeaderItem";
import { Home, InfoIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
      <div className="flex gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={Home} />
        <HeaderItem title={"About"} address={"/about"} Icon={InfoIcon} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <span className="ml-2 bg-amber-600 px-2 font-bold rounded-md text-lg">
          IMDB
        </span>
        <p className="font-semibold hidden md:inline">Clone</p>
      </div>
    </div>
  );
}
