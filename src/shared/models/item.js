export default class Item {
  $id
  $image
  $stockReadyToBuy
  $stock
  $name
  $price
  $description
  $favorite

  constructor (rawItem) {
    this.$id = rawItem.id
    this.$image = rawItem.image_url
    this.$stock = rawItem.stock
    this.$name = rawItem.productName
    this.$price = rawItem.price
    this.$description = rawItem.productDescription
    this.buildFavorite(rawItem.favorite)
    this.initSelectedStock()
  }

  getId () {
    return this.$id
  }

  getImage () {
    return this.$image
  }

  initSelectedStock () {
    this.$stockReadyToBuy = 0
  }

  getSelectedStock () {
    return this.$stockReadyToBuy
  }

  // setSelectedStock (selectedStock) {
  //   this.$stockReadyToBuy = selectedStock
  // }

  getStock () {
    return this.$stock
  }

  setStock (stock) {
    this.$stock = stock
  }

  getStockLeft () {
    return this.getStock() - this.getSelectedStock()
  }

  canIncreaseSelectedStock () {
    return this.getSelectedStock() < this.getStock()
  }

  canDecreaseSelectedStock () {
    return this.getSelectedStock() > 0
  }

  increaseSelectedStock () {
    if (!this.canIncreaseSelectedStock()) {
      return
    }

    this.$stockReadyToBuy++
  }

  decreaseSelectedStock () {
    if (!this.canDecreaseSelectedStock()) {
      return
    }

    this.$stockReadyToBuy--
  }

  getName () {
    return this.$name
  }

  getPrice () {
    return this.$price
  }

  getItemTotalPrice () {
    return this.getSelectedStock() * this.getPrice()
  }

  getDescription () {
    return this.$description
  }

  buildFavorite (favorite) {
    this.$favorite = (favorite === '1')
  }

  getIsFavorite () {
    return this.$favorite
  }

  setAsFavorite () {
    this.$favorite = true
  }

  removeFromFavorite () {
    this.$favorite = false
  }

  toggleFavorite () {
    this.$favorite = !this.$favorite
  }
}
