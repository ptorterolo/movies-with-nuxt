<template>
  <div class="container mx-auto p-4">
    <div class="w-full md:w-3/4 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="md:max-w-sm">
          <figure><img :src="movie.Poster" :alt="movie.Title" class="w-full" ></figure>
          <NuxtLink to="/movies" class="flex items-center btn btn-primary btn-sm mt-4 text-white"
            >Volver</NuxtLink
          >
        </div>
        <div class="text-white">
          <h2 class="text-2xl font-bold mb-2">{{ movie.Title }} ({{ movie.Year }})</h2>
          <p class="mb-2"><span class="font-semibold">Plot:</span> {{ movie.Plot }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><span class="font-semibold">Rated:</span> {{ movie.Rated }}</p>
            <p><span class="font-semibold">Released:</span> {{ movie.Released }}</p>
            <p><span class="font-semibold">Runtime:</span> {{ movie.Runtime }}</p>
            <p><span class="font-semibold">Genre:</span> {{ movie.Genre }}</p>
            <p><span class="font-semibold">Director:</span> {{ movie.Director }}</p>
            <p><span class="font-semibold">Writer:</span> {{ movie.Writer }}</p>
            <p><span class="font-semibold">Actors:</span> {{ movie.Actors }}</p>
            <p><span class="font-semibold">Language:</span> {{ movie.Language }}</p>
            <p><span class="font-semibold">Country:</span> {{ movie.Country }}</p>
            <p><span class="font-semibold">Awards:</span> {{ movie.Awards }}</p>
            <p><span class="font-semibold">Metascore:</span> {{ movie.Metascore }}</p>
            <p><span class="font-semibold">IMDb Rating:</span> {{ movie.imdbRating }}</p>
            <p><span class="font-semibold">IMDb Votes:</span> {{ movie.imdbVotes }}</p>
            <p><span class="font-semibold">Box Office:</span> {{ movie.BoxOffice }}</p>
          </div>
          <div class="mb-2">
            <span class="font-semibold">Ratings:</span>
            <ul class="list-disc list-inside">
              <li v-for="(rating, index) in movie.Ratings" :key="index">
                {{ rating.Source }}: {{ rating.Value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/'
defineProps<{ movie: Movie }>()
</script>

<style scoped></style>
