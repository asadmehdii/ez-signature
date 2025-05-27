import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dmiboomlaxybbzwlrohz.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtaWJvb21sYXh5YmJ6d2xyb2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTY0MDAsImV4cCI6MjA2Mjg5MjQwMH0.AMpc-2dxNQPniUKblgLHuYT6nwUUgcYotL_F9LUNZMM'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
