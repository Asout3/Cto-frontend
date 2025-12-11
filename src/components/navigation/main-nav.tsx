import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#playground", label: "Playground" },
  { href: "#docs", label: "Docs" },
];

export const MainNav = () => (
  <div className="flex flex-1 items-center gap-6">
    <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
      <span className="gradient-text">{siteConfig.name}</span>
    </Link>
    <nav className="hidden flex-1 items-center gap-5 text-sm font-medium text-white/70 md:flex">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="transition hover:text-white">
          {link.label}
        </Link>
      ))}
    </nav>
    <Button asChild className="ml-auto hidden md:inline-flex">
      <Link href={siteConfig.github} target="_blank" rel="noreferrer">
        Open repo
      </Link>
    </Button>
  </div>
);
