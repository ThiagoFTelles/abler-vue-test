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
        @click.prevent="login"
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
export default {
  name: "LoginView",
  data() {
    return {
      login: {
        username: "",
        password: "",
        request_token: "",
      },
    };
  },
  methods: {
    logar() {},
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