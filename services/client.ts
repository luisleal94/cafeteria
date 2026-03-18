import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://uulwtbcwmepenyskhmgh.supabase.co';
const supabaseKey = 'sb_publishable_sDhYzosYYX9JO_atVoGmbg_EZjDUkAC';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;