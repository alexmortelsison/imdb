"use client";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";
import React from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="hover:text-amber-600 cursor-pointer select-none">
      {theme === "dark" ? (
        <BiSun onClick={() => setTheme("light")} />
      ) : (
        <BiMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
