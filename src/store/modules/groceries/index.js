import GroceriesState from './groceriesState'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: new GroceriesState(),
  actions,
  mutations
}
