<template>
  <div
    class="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent"
  >
    <h1 class="font-mouse text-center text-6xl md:text-8xl text-white my-4">Movie Finder</h1>
    <form
      @submit.prevent="handleSubmit"
      class="relative space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
    >
      <h1 class="text-4xl font-semibold text-white">Sign In</h1>
      <div role="alert" class="alert alert-warning" v-if="errorMsge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <title>Warning Icon</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div>
          <p>{{ errorMsge }}</p>
          <p>Please Try Again</p>
        </div>
      </div>
      <div class="space-y-4">
        <label class="inline-block w-full" for="email">
          <span class="sr-only">Email</span>
          <input
            id="email"
            type="email"
            placeholder="Email"
            class="input w-full"
            v-model.trim="credentials.email"
            required
          />
        </label>
        <label class="inline-block w-full" for="password">
          <span class="sr-only">Password</span>
          <input
            id="password"
            type="password"
            placeholder="Password"
            minlength="6"
            class="input w-full"
            v-model.trim="credentials.password"
            required
          />
        </label>
      </div>

      <button type="submit" class="w-full rounded bg-[#e50914] py-3 font-semibold">
        <span class="text-white">Sign In</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
const { login } = useFirebaseAuth()
const credentials = ref({
  email: '',
  password: ''
})
const errorMsge = ref('')

async function handleSubmit() {
  errorMsge.value = ''
  try {
    await login(credentials.value.email, credentials.value.password)
    navigateTo('/movies')
  } catch (error: any) {
    errorMsge.value = error.message
  }
}
</script>

<style scoped></style>
