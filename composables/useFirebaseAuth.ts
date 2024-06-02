import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useUserStore } from '@/stores/user'

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp()
  const userStore = useUserStore()
  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword($auth, email, password)
      const user = userCredential.user
      userStore.setUser(user)
      return user
    } catch (error) {
      const errorMessage = (error as Error).message
      throw new Error(errorMessage)
    }
  }
  const logout = async () => {
    await signOut($auth)
    userStore.clearUser()
    await navigateTo('/')
  }
  return { login, logout }
}
