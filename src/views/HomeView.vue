<template>
  <section>
    <h1>✨ Filmes Populares ✨</h1>
    <MoviesFind />
    <MoviesList />
  </section>
</template>

<script>
import MoviesFind from "@/components/movies/MoviesFind.vue";
import MoviesList from "@/components/movies/MoviesList.vue";

export default {
  name: "HomeView",
  components: {
    MoviesFind,
    MoviesList,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #91549e;
  margin-top: 40px;
  text-align: center;
}
</style>