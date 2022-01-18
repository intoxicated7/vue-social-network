import useDatabase from './sb-hooks-db'
import { AuthData, UserType } from '../types'
import { ref } from 'vue'

const user = ref<UserType | null>(null)

export default function useAuth() {

  const { db }  = useDatabase()

  const register = async ({ email, password }: AuthData) => {
    const { user, error } = await db.auth.signUp(
      { email, password }
    )
    if (error) throw error
    return user
  }

  const login = async ({ email, password }: AuthData) => {
    const { user, error } = await db.auth.signIn({ email, password })
    if (error) throw error
    return user
  }

  const logout = async () => {
    const { error } = await db.auth.signOut();
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  return {
    user,
    login,
    logout,
    register,
    isLoggedIn,
  }
}