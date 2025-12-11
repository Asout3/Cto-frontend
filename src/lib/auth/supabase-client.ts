import { createClient } from "@supabase/supabase-js";

import { runtimeEnv } from "@/lib/config/env";

const FALLBACK_URL = "https://example.supabase.co";
const FALLBACK_KEY = "public-anon-key";

const supabaseUrl = runtimeEnv.supabaseUrl || FALLBACK_URL;
const supabaseAnonKey = runtimeEnv.supabaseAnonKey || FALLBACK_KEY;

export const supabaseBrowserClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    detectSessionInUrl: true,
    persistSession: true,
  },
});
