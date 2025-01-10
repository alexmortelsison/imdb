"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <div className="hover:text-amber-600 cursor-pointer">
          <Sun size={18} onClick={() => setTheme("light")} />
        </div>
      ) : (
        <div>
          <Moon size={18} onClick={() => setTheme("dark")} />
        </div>
      )}
    </div>
  );
}
