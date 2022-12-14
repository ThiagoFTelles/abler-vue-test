import Vue from 'vue';
import Vuex from 'vuex';
import { api } from '@/services.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    sessionId: '',
    user: {
      id: '',
      name: '',
      username: '',
      password: '',
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_SESSION_ID(state, payload) {
      state.sessionId = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload);
    },
  },
  actions: {
    updateLogin(context, payload) {
      context.commit('UPDATE_LOGIN', payload);
    },
    async updateSessionId(context, payload) {
      await context.commit('UPDATE_SESSION_ID', payload);
    },
    getUsuario(context) {
      return api
        .get(
          `/account?api_key=9528e187a9d83ace76fff9ee13f5e837&session_id=${context.state.sessionId}`,
        )
        .then((response) => {
          context.commit('UPDATE_USER', response.data);
          context.commit('UPDATE_LOGIN', true);
        });
    },
  },
});
