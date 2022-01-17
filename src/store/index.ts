import { createStore } from 'vuex'
import auth from './modules/auth'

const store = createStore({ 
  state: {},
  actions: {},
  mutations: {},
  modules: {
    auth
  }
}) 

export default store