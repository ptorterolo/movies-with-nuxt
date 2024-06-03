<template>
  <div class="container mx-auto p-4">
    <div class="card bg-base-100 md:w-1/2 lg:w-1/4 md:mx-auto mt-10">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-4">Cuenta</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>Email:</div>
          <div class="font-bold">{{ store.user?.email }}</div>
          <div>Email Verified:</div>
          <div class="font-bold">{{ store.user?.emailVerified }}</div>
          <div>Phone Number:</div>
          <div class="font-bold">{{ store.user?.phoneNumber || '-' }}</div>
          <div>Created At:</div>
          <div class="font-bold">{{ store.createdAt }}</div>
          <div>Last Login At:</div>
          <div class="font-bold">{{ store.lastSignInTime }}</div>
        </div>
        <div class="card-actions justify-center">
          <NuxtLink
            data-testid="backToMainPage"
            to="/movies"
            class="bg-primary btn btn-sm text-white mt-4"
            >Volver</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
definePageMeta({
  middleware: ['auth']
})

const store = useUserStore()
</script>

<style scoped></style>
