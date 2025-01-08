import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("supabaseUrl and supabaseAnonKey are required.");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
