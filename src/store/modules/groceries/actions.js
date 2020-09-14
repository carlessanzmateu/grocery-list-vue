import groceryListService from '@/shared/services/grocery-list.service'
import Item from '@/shared/models/item'
import ExchangeItem from '@/shared/models/exchangeItem'

export default {
  async getAllGroceries ({ commit }) {
    const groceries = await groceryListService.getAllGroceries()
    const groceriesAsItems = groceries.data.map(grocery => new Item(grocery))

    commit('setAllGroceries', groceriesAsItems)
    commit('mapCartAfterNavigationFullList')
  },

  async getFavorites ({ commit }) {
    const favorites = await groceryListService.getAllFavorites()
    const favoritesAsItems = favorites.data.map(favorite => new Item(favorite))

    commit('setFavorites', favoritesAsItems)
    commit('mapCartAfterNavigationFavorites')
  },

  async setItemAsFavorite ({ dispatch }, item) {
    item.toggleFavorite()
    const exchangeItem = new ExchangeItem(item)

    await groceryListService.updateGrocery(exchangeItem)
  }
}
