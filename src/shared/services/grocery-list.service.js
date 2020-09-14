import http from '@/shared/http'
import apiRoutes from '@/shared/constants/api.routes'

class GroceryListService {
  async getAllGroceries () {
    return await http.get(apiRoutes.getGroceryListURL())
  }

  async getAllFavorites () {
    return await http.get(apiRoutes.getFavouriteListURL())
  }

  async updateGrocery (item) {
    const url = `${apiRoutes.getGroceryListURL()}/${item.getId()}`
    await http.patch(url, {
      ...item
    })
  }
}

export default new GroceryListService()
