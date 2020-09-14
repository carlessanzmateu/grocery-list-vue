export default class ExchangeItem {
  id
  // eslint-disable-next-line
  image_url
  stock
  productName
  price
  productDescription
  favorite

  constructor (item) {
    this.id = item.getId()
    this.image_url = item.getImage()
    this.stock = item.getStock()
    this.productName = item.getName()
    this.price = item.getPrice()
    this.productDescription = item.getDescription()
    this.buildFavorite(item.getIsFavorite())
  }

  getId () {
    return this.id
  }

  buildFavorite (isFavorite) {
    this.favorite = isFavorite ? '1' : 0
  }

  updateStockInCheckout (realStock) {
    this.stock = realStock
  }
}
