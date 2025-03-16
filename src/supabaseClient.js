import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahtzgsffxetikwlxnwtl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodHpnc2ZmeGV0aWt3bHhud3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTc2ODksImV4cCI6MjA1NzY5MzY4OX0.LjlJTTa72wjlS-v_x7VGwRYYO2-wfLEaJ6UeOAeBFSk";
export const supabase = createClient(supabaseUrl, supabaseKey);