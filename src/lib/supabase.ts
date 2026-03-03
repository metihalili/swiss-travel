import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
console.log("SUPABASE URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("SUPABASE KEY:", (import.meta.env.VITE_SUPABASE_ANON_KEY ?? "").slice(0, 12));

export const supabase = createClient(url, key);
console.log("Supabase client created:", supabase);