<template>
  <NuxtLink
    aria-label="View details for {{ movie.Title }}"
    :to="{ name: 'movies-id', params: { id: movie.imdbID } }"
  >
    <div class="h-full">
      <div class="aspect-[10/16] bg-gray-600 p-1 transition duration-300 hover:scale-105 z-10">
        <img :src="setPoster()" :alt="`${movie.Title} Poster`" class="w-full h-full object-cover" >
      </div>
      <div class="text-white">
        <h2 class="mt-2">{{ movie.Title }}</h2>
        <p>{{ movie.Year }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/'
const props = defineProps<{ movie: Movie }>()
function setPoster() {
  return props.movie.Poster === 'N/A' ? '/moviePosterPlaceholder.jpg' : props.movie.Poster
}
</script>

<style scoped></style>
