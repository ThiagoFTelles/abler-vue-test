<template>
  <div>
    {{userCreatedLists}}
    <h1>Olá {{user.name ? user.name : user.username}}</h1>
    <div
      v-for="(list, index) in userCreatedLists"
      :key="index"
    >
      <p>
        {{list.name}}
      </p>
      <p>{{list.description}}</p>
    </div>
  </div>
</template>

<script>
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "UserView",
  data() {
    return {
      userCreatedLists: null,
    };
  },
  computed: {
    ...mapState({
      accountId: (state) => state.user.id,
      sessionId: (state) => state.sessionId,
      user: (state) => state.user,
    }),
  },
  async created() {
    try {
      await this.$store.dispatch("getUsuario");
      await api
        .get(
          `/account/${this.accountId}/lists?api_key=9528e187a9d83ace76fff9ee13f5e837&language=pt-BR&session_id=${this.sessionId}&page=1`
        )
        .then((r) => {
          this.userCreatedLists = r.data.results;
        });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>