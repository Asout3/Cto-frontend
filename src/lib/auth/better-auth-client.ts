import { createAuthClient } from "better-auth/react";

import { runtimeEnv } from "@/lib/config/env";

export const authClient = createAuthClient({
  baseURL: runtimeEnv.betterAuthUrl || "http://localhost:3000/api/auth",
  appName: "cto-frontend",
  autoSignIn: false,
  fetchOptions: {
    credentials: "include",
  },
});
