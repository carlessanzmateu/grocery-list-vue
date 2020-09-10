class MockItem {
  constructor() {
    this.$id = '1'
    this.$image = 'mock.png'
    this.$stockReadyToBuy = 0
    this.$stock = 1
    this.$name = 'some name'
    this.$price = 10
    this.$description = 'Some description'
    this.$favorite = false
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

  getStock () {
    return this.$stock
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

export { MockItem }
