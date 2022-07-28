<template>
  <div>
    <h1>Olá {{user.name ? user.name : user.username}}</h1>
    <div v-if="userCreatedLists">
      <div
        class="list"
        v-for="(list, index) in userCreatedLists"
        :key="index"
      >
        <h3 class="name">
          {{list.name}}
        </h3>
        <p class="description">{{list.description}}</p>
        <!-- <div
          class="btn"
          @click="listDetails(list.id)"
        >Detalhes</div> -->
      </div>
    </div>
    <p v-else>Você não criou nenhuma lista no DMDB</p>

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
      details: [],
    };
  },
  methods: {
    async listDetails(id) {
      await api
        .get(
          `/list/${id}?api_key=9528e187a9d83ace76fff9ee13f5e837&language=pt-BR`
        )
        .then((r) => {
          this.details = r.data.items;
        });
    },
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
  beforeCreate() {
    if (!this.$store.state.login) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 20px;
}

.list {
  padding: 10px 20px;
}
</style>