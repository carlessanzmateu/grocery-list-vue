import GroceriesState from './groceriesState'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state: new GroceriesState(),
  actions,
  mutations,
  getters
}
