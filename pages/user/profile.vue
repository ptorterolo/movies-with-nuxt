<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 md:w-1/2 md:mx-auto mt-10">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-4">Cuenta</h1>
        <div class="grid grid-cols-2">
          <div class="mb-4">Email:</div>
          <div class="font-bold">{{ store.user.email }}</div>
          <div class="mb-4">Email Verified:</div>
          <div class="font-bold">{{ store.user.emailVerified }}</div>
          <div class="mb-4">Phone Number:</div>
          <div class="font-bold">{{ store.user.phoneNumber || '-' }}</div>
          <div class="mb-4">Created At:</div>
          <div class="font-bold">{{ store.createdAt }}</div>
          <div class="mb-4">Last Login At:</div>
          <div class="font-bold">{{ store.lastSignInTime }}</div>
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
