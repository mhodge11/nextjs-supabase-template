"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => (
  <NextThemesProvider {...props}>
    <TooltipProvider>{children}</TooltipProvider>
  </NextThemesProvider>
);
