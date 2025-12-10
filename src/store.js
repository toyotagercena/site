import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setToken(state, newToken){
      state.token = newToken;
      localStorage.setItem('token', newToken);
    },
    delToken(state){
      state.token = ''
      localStorage.removeItem('token');
    }
  },
  actions: {

  },
  getters: {
    getToken(state){
      return state.token
    }
  }
})
