import { useUserStore } from '@/stores/user'
export default defineNuxtRouteMiddleware((_to, _from) => {
  const store = useUserStore()
  if (!store.isAuthenticated) {
    return navigateTo('/')
  }
})
