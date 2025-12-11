"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider";

type Props = {
  children: ReactNode;
};

export const AppProviders = ({ children }: Props) => <ThemeProvider>{children}</ThemeProvider>;
