<template>
  <div>
    <AppMovieDetails :movie="data" />
  </div>
</template>

<script setup lang="ts">
const { omdbApiKey } = useRuntimeConfig().public
const route = useRoute()

const { data } = await useFetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}`, {
  query: { i: route.params.id, plot: 'full' }
})
</script>

<style scoped></style>
