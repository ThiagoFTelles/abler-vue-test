<template>
  <form>
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      placeholder="Buscar"
    >
    <input
      type="submit"
      id="submit"
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  padding: 0 10px;
}
#search {
  width: 100%;
  padding: 20px;
  border: none;
}
#search:hover,
#search:focus {
  transform: scale(1.1);
}
#submit {
  background: url("../../assets/icons/search.svg") no-repeat center center;
  border: none;
  box-shadow: none;
  cursor: pointer;
  height: 62px;
  position: absolute;
  width: 60px;
  right: 0px;
  text-indent: -150px;
  top: 0px;
}
</style>