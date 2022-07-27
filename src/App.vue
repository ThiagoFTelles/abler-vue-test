<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
@font-face {
  font-family: Avenir;
  src: url("./assets/fonts/Avenir-Medium.ttf");
}

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

body,
.btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #345;
}

a {
  color: #91549e;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #91549e;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn:hover {
  box-shadow: inset 0 0 100px 100px rgb(0 0 0 / 20%);
  transform: scale(1.1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

::-webkit-scrollbar {
  width: 11px;
}

::-webkit-scrollbar-thumb {
  background: #91549e;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}
</style>
