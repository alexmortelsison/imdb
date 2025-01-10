import React from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, InfoIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex text-sm justify-between max-w-6xl mx-auto p-4 border-b border-slate-400">
      <div className="flex gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={HomeIcon} />
        <HeaderItem title={"About"} address={"/about"} Icon={InfoIcon} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center">
          <span className="text-lg font-bold bg-amber-600 px-2 py-1 rounded-lg ml-2">
            IMDB
          </span>
          <p className="hidden sm:inline font-semibold">Clone</p>
        </Link>
      </div>
    </div>
  );
}
