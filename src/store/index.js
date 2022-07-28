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
      console.log('UPDATE_USER ' + payload);
      state.user = Object.assign({}, state.user, payload);
    },
    UPDATE_REQUEST_TOKEN(state, payload) {
      state.requestToken = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos.unshift(payload);
    },
  },
  actions: {
    updateRequestToken(context, payload) {
      context.commit('UPDATE_REQUEST_TOKEN', payload);
    },
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
    getUserLists({ state, commit }) {
      return api
        .get(`/produto?user_id=${state.usuario.id}&_limit=100`)
        .then((response) => {
          commit('UPDATE_USUARIO_PRODUTOS', response.data.data);
        });
    },
    // loginUser(context) {
    //   return api
    //     .get(
    //       '/authentication/token/new?api_key=9528e187a9d83ace76fff9ee13f5e837',
    //     )
    //     .then((r) => {
    //       context.commit('UPDATE_REQUEST_TOKEN', r.data.request_token);
    //     });
    // },
  },
});
