"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, GitBranch, Shield, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuthStatus } from "@/components/auth/auth-status";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils/cn";

const features = [
  {
    title: "Glassmorphic UI kit",
    description: "Radix primitives, shadcn/ui patterns, and Tailwind utilities are ready to go.",
    icon: Sparkles,
  },
  {
    title: "Realtime-ready backend",
    description: "Supabase clients and Better Auth helpers pre-wired for SaaS speed.",
    icon: Zap,
  },
  {
    title: "Zero-config DX",
    description: "ESLint, Prettier, TypeScript, and pre-commit checks keep your repo healthy.",
    icon: Shield,
  },
];

const stack = [
  { label: "Next.js 15", detail: "App Router • TurboPack dev • Edge ready" },
  { label: "Tailwind CSS", detail: "Glassmorphic theme tokens & utilities" },
  { label: "Radix + shadcn", detail: "Accessible primitives & component recipes" },
  { label: "Better Auth", detail: "Drop-in modern authentication" },
  { label: "Supabase", detail: "Database, auth, storage, and realtime SDK" },
];

const StatBadge = ({ label, value }: { label: string; value: string }) => (
  <Card className="flex flex-col gap-2 p-5 text-left">
    <span className="text-xs uppercase tracking-[0.3em] text-white/60">{label}</span>
    <span className="text-3xl font-semibold text-white">{value}</span>
  </Card>
);

const HeroDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="outline" className="w-full justify-between text-left">
        Review launch checklist
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
      <Dialog.Content className="glass-surface fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 space-y-4 p-8 text-white shadow-2xl md:inset-x-auto md:w-[480px]">
        <Dialog.Title className="text-2xl font-semibold">Launch checklist</Dialog.Title>
        <Dialog.Description className="text-white/70">
          Everything you need to kick off a new experience on cto.new.
        </Dialog.Description>
        <ul className="space-y-3 text-sm text-white/80">
          {[
            "Install dependencies with npm install",
            "Run npm run dev to boot the live preview",
            "Connect Supabase and Better Auth keys in .env.local",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              {item}
            </li>
          ))}
        </ul>
        <Dialog.Close asChild>
          <Button className="w-full">Got it</Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const QuickActions = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <Button variant="ghost" className="w-full justify-between text-left text-white">
        Quick actions
        <ArrowRight className="h-4 w-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="glass-surface space-y-1 p-3 text-sm text-white" align="end">
        {[
          { label: "View design tokens", href: "#stack" },
          { label: "Open API playground", href: "#playground" },
          { label: "Check deployment logs", href: "#docs" },
        ].map((action) => (
          <DropdownMenu.Item
            key={action.label}
            className="rounded-xl px-3 py-2 text-white/80 outline-none transition hover:bg-white/5"
          >
            <Link href={action.href}>{action.label}</Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

const Hero = () => (
  <section className="container grid gap-10 py-16 lg:grid-cols-[3fr_2fr] lg:items-center">
    <div className="space-y-8">
      <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
        <GitBranch className="h-3.5 w-3.5" /> chore/setup-task-runner
      </p>
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-5xl font-semibold leading-tight md:text-6xl"
        >
          Ship a glassy Next.js experience in minutes.
        </motion.h1>
        <p className="text-lg text-white/80 md:text-xl">
          This repository is pre-configured with a modern frontend stack so you can focus on product
          thinking instead of boilerplate.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <Link href={siteConfig.github} target="_blank" rel="noreferrer">
            Explore repo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="mailto:founders@cto.new">Book onboarding</Link>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <HeroDialog />
        <QuickActions />
      </div>
    </div>
    <div className="space-y-4">
      <StatBadge label="Build time" value="~32s" />
      <StatBadge label="Dev server" value="npm run dev" />
      <AuthStatus />
      <Card className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Live preview</p>
        <div className="space-y-2 text-sm text-white/80">
          <p>
            Runs on <code className="rounded bg-white/10 px-2 py-1">http://localhost:3000</code>.
          </p>
          <p>Hot reload is enabled out of the box via Next.js 15 dev server.</p>
        </div>
      </Card>
    </div>
  </section>
);

const StackSection = () => (
  <section id="stack" className="container py-16">
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-3xl font-semibold">Optimized task runner</h2>
        <p className="text-white/70">
          Everything wired for linting, formatting, and CI reliability.
        </p>
      </div>
      <Button variant="ghost" className="text-white/80" asChild>
        <Link href="/docs/task-runner">View config</Link>
      </Button>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {stack.map((entry) => (
        <Card
          key={entry.label}
          className="flex items-center justify-between border-white/15 bg-white/5"
        >
          <div>
            <p className="text-lg font-semibold">{entry.label}</p>
            <p className="text-sm text-white/70">{entry.detail}</p>
          </div>
          <Cpu className="h-8 w-8 text-white/30" />
        </Card>
      ))}
    </div>
  </section>
);

const FeatureSection = () => (
  <section id="playground" className="container grid gap-6 py-16 md:grid-cols-3">
    {features.map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="space-y-4">
          <feature.icon className="h-6 w-6 text-secondary" />
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-sm text-white/70">{feature.description}</p>
        </Card>
      </motion.div>
    ))}
  </section>
);

const DocsCallout = () => (
  <section id="docs" className="container py-16">
    <Card className="flex flex-col gap-6 border border-dashed border-white/20 bg-black/40 p-10 text-center">
      <h3 className="text-2xl font-semibold">Ready to build?</h3>
      <p className="mx-auto max-w-2xl text-white/80">
        Copy <code className="rounded bg-white/10 px-2 py-1">.env.example</code> to{" "}
        <code className="rounded bg-white/10 px-2 py-1">.env.local</code>, then run
        <code className="ml-2 rounded bg-white/10 px-2 py-1">npm run dev</code> to start the
        edge-ready preview inside cto.new.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/docs">Read the docs</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://supabase.com" target="_blank" rel="noreferrer">
            Connect Supabase
          </Link>
        </Button>
      </div>
    </Card>
  </section>
);

const Page = () => (
  <div className={cn("space-y-10 pb-16")}>
    <Hero />
    <StackSection />
    <FeatureSection />
    <DocsCallout />
  </div>
);

export default Page;
