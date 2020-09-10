import GroceryListService from '@/shared/services/grocery-list.service'
import Item from '@/shared/models/item'
import ExchangeItem from '@/shared/models/exchangeItem'

const groceryListService = new GroceryListService()

export default {
  async getAllGroceries ({ commit }) {
    const groceries = await groceryListService.getAllGroceries()
    const groceriesAsItems = groceries.data.map(grocery => new Item(grocery))

    commit('setAllGroceries', groceriesAsItems)
  },

  async getFavorites ({ commit }) {
    const favorites = await groceryListService.getAllFavorites()
    const favoritesAsItems = favorites.data.map(favorite => new Item(favorite))

    commit('setFavorites', favoritesAsItems)
  },

  async setItemAsFavorite ({ dispatch }, item) {
    item.toggleFavorite()
    const exchangeItem = new ExchangeItem(item)

    await groceryListService.updateGrocery(exchangeItem)
  }
}
