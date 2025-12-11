"use client";

import { ShieldCheck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { authClient } from "@/lib/auth/better-auth-client";

export const AuthStatus = () => {
  const { data, isPending } = authClient.useSession();

  const summary = (() => {
    if (isPending) {
      return "Checking session...";
    }

    const session = data as { user?: { email?: string | null } } | null;

    if (session?.user?.email) {
      return `Signed in as ${session.user.email}`;
    }

    return "No session detected yet";
  })();

  return (
    <Card className="flex items-center gap-4 bg-white/10">
      <ShieldCheck className="h-8 w-8 text-secondary" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Auth</p>
        <p className="text-base font-medium text-white">{summary}</p>
      </div>
    </Card>
  );
};
