import Link from "next/link";

import { siteConfig } from "@/lib/config/site";

export const SiteFooter = () => (
  <footer className="border-t border-white/10 bg-black/40">
    <div className="container flex flex-col gap-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
      <p>
        Built for <span className="text-white">{siteConfig.name}</span> · Powered by Next.js 15
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href={siteConfig.github}
          className="hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        <Link href="/docs" className="hover:text-white">
          Docs
        </Link>
        <Link href="/changelog" className="hover:text-white">
          Changelog
        </Link>
      </div>
    </div>
  </footer>
);
