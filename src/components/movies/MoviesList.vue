<template>
  <section class="movies-container">
    <div
      v-for="movie in movies"
      :key="movie.id"
    >
      <img
        :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`"
        :alt="movie.original_title"
      >
      <h2 class="titulo">
        {{movie.original_title}}
      </h2>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "MoviesList",
  data() {
    return {
      movies: null,
    };
  },
  methods: {
    getMovies() {
      api
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=9528e187a9d83ace76fff9ee13f5e837&language=en-US&page=1"
        )
        .then((r) => {
          this.movies = r.data.results;
        });
    },
  },
  created() {
    this.getMovies();
  },
};
</script>

<style>
</style>