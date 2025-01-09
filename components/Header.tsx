import React from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, InfoIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex text-sm justify-between max-w-6xl mx-auto p-4 border-b border-slate-400 tracking-tighter">
      <div className="flex gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={HomeIcon} />
        <HeaderItem title={"About"} address={"/about"} Icon={InfoIcon} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <span className="ml-2 text-lg font-bold bg-amber-600 px-2 py-1 rounded-lg">
          IMDB
        </span>
        <p className="hidden sm:inline font-semibold">Clone</p>
      </div>
    </div>
  );
}
