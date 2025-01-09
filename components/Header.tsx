import React from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, InfoIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex text-sm items-center p-4 max-w-6xl mx-auto justify-between border-b border-slate-700">
      <header className="flex gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={HomeIcon} />
        <HeaderItem title={"About"} address={"/about"} Icon={InfoIcon} />
      </header>
      <header className="flex items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center">
          <span className="text-lg bg-amber-600 px-2 py-1 font-bold rounded-lg ml-2">
            IMDB
          </span>
          <p className="font-semibold hidden sm:inline">Clone</p>
        </Link>
      </header>
    </div>
  );
}
