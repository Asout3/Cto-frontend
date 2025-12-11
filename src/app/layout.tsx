import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppProviders } from "@/providers/app-providers";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils/cn";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const Background = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 bg-glass-gradient" aria-hidden />
);

const Noise = () => (
  <div
    className="pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-screen"
    style={{
      backgroundImage:
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.6"/></svg>\')',
    }}
    aria-hidden
  />
);

const LayoutBackground = () => (
  <div className="absolute inset-0">
    <Background />
    <Noise />
    <div
      className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-black"
      aria-hidden
    />
  </div>
);

const BodyShell = ({ children }: { children: ReactNode }) => (
  <body className={cn("min-h-screen bg-black text-white antialiased", font.variable, "relative")}>
    <LayoutBackground />
    <AppProviders>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </AppProviders>
  </body>
);

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en" suppressHydrationWarning>
    <BodyShell>{children}</BodyShell>
  </html>
);

export default RootLayout;
