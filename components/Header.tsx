import React from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, InfoIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="text-sm flex justify-between max-w-6xl mx-auto p-4 border-b border-b-slate-900 dark:border-b-slate-500">
      <div className="flex items-center gap-3">
        <HeaderItem title={"Home"} address={"/"} Icon={HomeIcon} />
        <HeaderItem title={"About"} address={"/about"} Icon={InfoIcon} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <Link href={"/"}>
          <span className="ml-2 bg-amber-600 px-2 py-1 font-bold text-lg rounded-lg">
            IMDB
          </span>
          <p className="hidden sm:inline font-semibold ml-1">Clone</p>
        </Link>
      </div>
    </div>
  );
}
