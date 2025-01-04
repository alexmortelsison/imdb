import { ThemeProvider } from "next-themes";
import React from "react";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}>
      <div className="dark:bg-slate-900 min-h-screen select-none transition-colors duration-700">
        {children}
      </div>
    </ThemeProvider>
  );
}
