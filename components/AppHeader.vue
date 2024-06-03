<template>
  <div class="navbar bg-slate-950">
    <div class="flex-1">
      <NuxtLink data-testid="backToMainPage" to="/movies" class="text-4xl text-white font-mouse"
        >Movie Finder</NuxtLink
      >
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle avatar"
          aria-label="User Profile"
        >
          <template v-if="store.user?.photoURL">
            <div class="w-10 rounded-full">
              <img alt="Imagen de usuario" :src="store.user?.photoURL" >
            </div>
          </template>
          <template v-else>
            <div>
              <Icon name="mdi:user" class="w-6 h-6 text-white" />
            </div>
          </template>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li><NuxtLink to="/user/profile" data-testid="userProfileBtn">Profile</NuxtLink></li>
          <li>
            <button type="button" data-testid="logoutBtn" @click="setLogout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const { logout } = useFirebaseAuth()
function setLogout() {
  logout()
}
</script>

<style scoped></style>
