class ApiRoutes {
  $server = 'http://localhost:3000/';
  $grocery = 'grocery';
  $favorite = 'favorite';

  getGroceryListURL () {
    return `${this.$server}${this.$grocery}`
  }

  getFavouriteListURL () {
    const isFavouriteFlag = '1'
    return `${this.getGroceryListURL()}?${this.$favorite}=${isFavouriteFlag}`
  }
}

export default new ApiRoutes()
