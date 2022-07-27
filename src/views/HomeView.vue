<template>
  <section>
    <h1>✨ Filmes Populares ✨</h1>
    <MoviesSearch />
    <MoviesList />
  </section>
</template>

<script>
import MoviesSearch from "@/components/movies/MoviesSearch.vue";
import MoviesList from "@/components/movies/MoviesList.vue";

export default {
  name: "HomeView",
  components: {
    MoviesSearch,
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