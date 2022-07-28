<template>
  <section class="login">
    <h1 class="login">Login</h1>
    <form>
      <label for="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="login.username"
      >
      <label for="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      >
      <button
        class="btn"
        @click.prevent="getRequestToken"
      >Logar</button>
    </form>
    <p class="lost">
      <a
        href="https://www.themoviedb.org/reset-password"
        target="_blank"
      >Perdeu a senha? Clique aqui.</a>
    </p>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "LoginView",
  data() {
    return {
      requestToken: "",
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch("updateLogin", true);
      this.$router.push({ name: "user" });
    },
    getRequestToken() {
      api
        .get(
          "/authentication/token/new?api_key=9528e187a9d83ace76fff9ee13f5e837"
        )
        .then((r) => {
          this.requestToken = r.data.request_token;
          this.ValidateRequestToken();
        });
    },
    ValidateRequestToken() {
      let requestBody = {
        username: this.login.username,
        password: this.login.password,
        request_token: this.requestToken,
      };
      api
        .post(
          "/authentication/token/validate_with_login?api_key=9528e187a9d83ace76fff9ee13f5e837",
          requestBody
        )
        .then(() => {
          this.getSessionId();
        });
    },
    async getSessionId() {
      try {
        await api
          .post(
            "/authentication/session/new?api_key=9528e187a9d83ace76fff9ee13f5e837",
            { request_token: this.requestToken }
          )
          .then((r) => {
            this.$store.dispatch("updateSessionId", r.data.session_id);
            this.loginUser();
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeCreate() {
    if (this.$store.state.login) {
      this.$router.push({ name: "user" });
    }
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
form {
  display: grid;
}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #91549e;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.lost {
  text-align: center;
  margin: 20px auto 0 auto;
}
.lost a:hover {
  color: #91549e;
  text-decoration: underline;
}
</style>