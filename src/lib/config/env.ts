export const runtimeEnv = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  betterAuthUrl: process.env.NEXT_PUBLIC_BETTER_AUTH_URL ?? "",
  betterAuthClientId: process.env.NEXT_PUBLIC_BETTER_AUTH_CLIENT_ID ?? "",
};

export const isEnvConfigured = Object.values(runtimeEnv).every((value) => Boolean(value));
