<template>
  <nav>
    <router-link
      to="/"
      class="logo"
    >
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        alt="Abler Test"
      >
    </router-link>
    <router-link
      v-if="name"
      to="/user"
      class="btn"
    >
      {{name}}
    </router-link>
    <router-link
      v-else
      class="btn"
      to="/login"
    >
      Login
    </router-link>
  </nav>
</template>

<script>
// import { api } from "@/services.js";

export default {
  name: "TheHeader",
  methods: {},
  computed: {
    name() {
      return this.$store.state.user.name
        ? this.$store.state.user.name.replace(/ .*/, "")
        : this.$store.state.user.username;
    },
  },
  watch: {},
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 45px;
}
</style>