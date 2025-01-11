import React from "react";
import HeaderItem from "./HeaderItem";
import { Home, InfoIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex p-8 justify-between max-w-6xl mx-auto text-sm border-b border-slate-400">
      <div className="flex gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={Home} />
        <HeaderItem title={"About"} address={"/about"} Icon={InfoIcon} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center">
          <span className="ml-4 text-lg font-bold bg-amber-600 px-2 py-1 rounded-lg">
            IMDB
          </span>
          <p className="font-semibold ml-1">Clone</p>
        </Link>
      </div>
    </div>
  );
}
