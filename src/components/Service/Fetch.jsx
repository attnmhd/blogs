import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ussvkhwyicypefxbfhvt.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzc3ZraHd5aWN5cGVmeGJmaHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MDUzMzIsImV4cCI6MjAzNDI4MTMzMn0.GjGuabUxheumOJiY3l84Bk5-eA9J3C1fn8xYJikPy3U";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
