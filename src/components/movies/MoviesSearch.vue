<template>
  <form>
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
    >
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="searchMovies"
    >
  </form>
</template>

<script>
export default {
  name: "MoviesSearch",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchMovies() {
      this.$router.push({ query: { query: this.search } });
    },
  },
};
</script>

<style>
</style>