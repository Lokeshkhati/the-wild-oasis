import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcavmwnnwpmjdqyirzsl.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjYXZtd25ud3BtamRxeWlyenNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMTg1NjMsImV4cCI6MjAwMzU5NDU2M30.aV1rKDlXFxd9ZHs9fRiMtdVr9TadnbcRFQoCUWzJKtM"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase