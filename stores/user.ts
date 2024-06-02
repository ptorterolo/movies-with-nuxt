import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => user.value !== null)
  const createdAt = computed(() => new Date(user.value?.metadata.creationTime).toLocaleDateString())
  const lastSignInTime = computed(() => {
    const date = new Date(user.value?.metadata.lastSignInTime).toLocaleDateString()
    return date
  })
  function setUser(loggedUser: User) {
    user.value = loggedUser
  }
  function clearUser() {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    createdAt,
    lastSignInTime,
    setUser,
    clearUser
  }
})
