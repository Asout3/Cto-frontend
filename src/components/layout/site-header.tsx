import { MainNav } from "@/components/navigation/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export const SiteHeader = () => (
  <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur-xl">
    <div className="container flex h-20 items-center gap-4">
      <MainNav />
      <ThemeToggle />
    </div>
  </header>
);
