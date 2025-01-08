import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}>
      <div className="dark:bg-slate-900 min-h-screen transition-colors duration-700 select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
