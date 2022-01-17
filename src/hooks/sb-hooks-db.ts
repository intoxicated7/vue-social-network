import { createClient } from '@supabase/supabase-js'
import useAuth from './sb-hooks-auth'

const supabaseUrl = 'https://ngsjykcpvrjblltlfkfs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMzY0OTI1LCJleHAiOjE5NTc5NDA5MjV9.XctrQcGbIxgeDqc7eHVY8jFV1r_WCRAUpQENBuLl25c'
const db = createClient(supabaseUrl, supabaseKey)

db.auth.onAuthStateChange((event, session) => {
  const { user } = useAuth()

  user.value = session?.user || null
})

export default function useDatabase() {
  return { db }
}