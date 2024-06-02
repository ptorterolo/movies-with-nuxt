import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Movie } from '../types'

export const useMovieStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([])
  const queryString = ref('')
  const page = ref(1)
  const totalResults = ref('')

  function setQueryString(newQueryString: string) {
    queryString.value = newQueryString
  }
  function setTotalResults(newTotalResults: string) {
    totalResults.value = newTotalResults
  }
  function addMovies(newMovies: Movie[]) {
    const uniqueMovies = newMovies.filter((newMovie) => {
      return !movies.value.some((movie) => movie.imdbID === newMovie.imdbID)
    })

    movies.value = [...movies.value, ...uniqueMovies]
  }

  function incrementPage() {
    page.value = page.value + 1
  }
  function clearMovies() {
    movies.value = []
    page.value = 1
    totalResults.value = ''
  }

  return {
    movies,
    queryString,
    totalResults,
    page,
    setQueryString,
    setTotalResults,
    incrementPage,
    addMovies,
    clearMovies
  }
})
