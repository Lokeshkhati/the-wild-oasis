import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcavmwnnwpmjdqyirzsl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjYXZtd25ud3BtamRxeWlyenNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5NzQyNTMsImV4cCI6MjAwMzU1MDI1M30.ra - 4R3x40c_Sf0UKEgmGgRrTUUyBySldzPUrWBD91Uk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase