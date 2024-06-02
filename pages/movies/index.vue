<template>
  <div class="bg-slate-800">
    <div class="bg-gradient-to-b from-slate-500 to-slate-700 p-8">
      <div class="relative">
        <label for="search" class="sr-only">Buscar Películas</label>
        <input
          id="search"
          v-model.trim="searchString"
          aria-label="Buscar películas"
          class="bg-transparent text-white text-lg md:text-4xl w-full active:outline-none focus:outline-none"
          placeholder="Título de pelicula (al menos 3 caracteres)"
        >
        <button
          v-if="searchString"
          type="button"
          class="absolute right-0"
          aria-label="Limpiar búsqueda"
          @click="searchString = ''"
        >
          <Icon name="material-symbols-light:close" class="w-10 h-10 text-white" />
        </button>
      </div>
    </div>
    <div>
      <h2 v-if="!movieStore.movies.length" class="text-4xl text-center text-white my-10">
        Busca algún título para comenzar...
      </h2>
    </div>
    <p v-if="movieStore.totalResults" class="text-white mt-10 px-4">
      Encontrados: {{ movieStore.totalResults }} para {{ searchString }}
    </p>
    <section
      id="movieListContainer"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10 px-4"
    >
      <template v-for="(movie, index) in movieStore.movies" :key="movie.imdbID">
        <AppMovieCard :movie="movie" />
        <div v-if="index === movieStore.movies.length - 1" ref="lastMovie" />
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { MovieSearch } from '@/types/'
import { useMovieStore } from '@/stores/movies'
const movieStore = useMovieStore()
definePageMeta({
  middleware: ['auth']
})
const { omdbApiKey } = useRuntimeConfig().public
const searchString = ref(movieStore.queryString)

watch(
  () => searchString.value,
  (newvalue, oldValue) => {
    movieStore.setQueryString(newvalue)

    if (newvalue == '') movieStore.clearMovies()

    if (newvalue.length > 2 && newvalue !== oldValue) getData()
  }
)

const isLoading = ref(false)

function debounce(callback: (...args: unknown[]) => void, wait: number) {
  let timerId: ReturnType<typeof setTimeout>
  return (...args: unknown[]) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
async function getData() {
  if (isLoading.value) return
  isLoading.value = true
  try {
    const response: MovieSearch = await $fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}`, {
      params: {
        s: movieStore.queryString,
        page: movieStore.page
      }
    })

    if (response.Response === 'False') return
    movieStore.addMovies(response.Search)
    movieStore.setTotalResults(response.totalResults)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const handleScroll = debounce(() => {
  const movieListContainer = document.getElementById('movieListContainer')
  if (
    movieListContainer &&
    window.innerHeight + window.scrollY >= movieListContainer.offsetHeight
  ) {
    movieStore.incrementPage()
    getData()
  }
}, 200)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
