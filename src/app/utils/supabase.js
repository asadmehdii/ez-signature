import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dfljpgviidxdznbdyyop.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbGpwZ3ZpaWR4ZHpuYmR5eW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTc3OTEsImV4cCI6MjA3NjU3Mzc5MX0.8K8QJzs_Tvu7K3ePE9kJ4tbZ4QTF9_kuFaPvAo'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
