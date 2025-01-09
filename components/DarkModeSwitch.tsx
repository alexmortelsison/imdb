"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="hover:text-amber-600 cursor-pointer">
      {theme === "dark" ? (
        <div>
          <Sun size={20} onClick={() => setTheme("light")} />
        </div>
      ) : (
        <div>
          <Moon size={20} onClick={() => setTheme("dark")} />
        </div>
      )}
    </div>
  );
}
