import Vue from 'vue'
import Vuex from 'vuex'

import groceries from './modules/groceries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    groceries
  }
})
