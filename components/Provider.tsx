import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="sytem" attribute={"class"}>
      <div className="dark:bg-slate-900 min-h-screen select-none transition-colors duration-500">
        {children}
      </div>
    </ThemeProvider>
  );
}
