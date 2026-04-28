import { createClient } from '@supabase/supabase-js';

// You can use environment variables for better security
// Create a .env.local file and add:
// REACT_APP_SUPABASE_URL=your-url
// REACT_APP_SUPABASE_ANON_KEY=your-key

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || "https://dotfokkctshikgxxavku.supabase.co";
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvdGZva2tjdHNoaWtneHhhdmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMDExMjUsImV4cCI6MjA5Mjc3NzEyNX0.PY1xQ9brcEI8j-sn8Oe7g2Qy9h_dfDU4mFO7fh3Yrtk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
