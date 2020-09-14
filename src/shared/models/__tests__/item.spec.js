import Item from '@/shared/models/item'
import { mockExchangeItem } from '@/shared/models/__mocks__/exchangeItem'

describe('Item', () => {
  it('should create', () => {
    const item = new Item(mockExchangeItem)

    expect(item).toBeDefined()
  })

  it('should map Item properly', () => {
    const expectedFavorite = false
    const expectedStockReadyToBuy = 0
    const item = new Item(mockExchangeItem)

    expect(item.$id).toBe(mockExchangeItem.id)
    expect(item.$image).toBe(mockExchangeItem.image_url)
    expect(item.$stockReadyToBuy).toBe(expectedStockReadyToBuy)
    expect(item.$stock).toBe(mockExchangeItem.stock)
    expect(item.$name).toBe(mockExchangeItem.productName)
    expect(item.$price).toBe(mockExchangeItem.price)
    expect(item.$description).toBe(mockExchangeItem.productDescription)
    expect(item.$favorite).toBe(expectedFavorite)
  })

  it('should have getId method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getId).toBeDefined()
  })

  it('should return id when call getId method', () => {
    const item = new Item(mockExchangeItem)
    const expectedId = mockExchangeItem.id

    expect(item.getId()).toBe(expectedId)
  })

  it('should have getImage method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getImage).toBeDefined()
  })

  it('should return image when call getImage method', () => {
    const item = new Item(mockExchangeItem)
    const expectedImage = mockExchangeItem.image_url

    expect(item.getImage()).toBe(expectedImage)
  })

  it('should have initSelectedStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getImage).toBeDefined()
  })

  it('should init $stockReadyToBuy when call initSelectedStock method', () => {
    const item = new Item(mockExchangeItem)
    const expectedValue = 0

    expect(item.$stockReadyToBuy).toBe(expectedValue)
  })

  it('should have getSelectedStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getSelectedStock).toBeDefined()
  })

  it('should return $stockReadyToBuy when call getSelectedStock method', () => {
    const item = new Item(mockExchangeItem)
    const expectedStockReadyToBuy = 1

    item.$stockReadyToBuy = expectedStockReadyToBuy

    expect(item.getSelectedStock()).toBe(expectedStockReadyToBuy)
  })

  it('should have getStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getStock).toBeDefined()
  })

  it('should return stock when call getStock method', () => {
    const item = new Item(mockExchangeItem)
    const expectedStock = mockExchangeItem.stock

    expect(item.getStock()).toBe(expectedStock)
  })

  it('should have setStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.setStock).toBeDefined()
  })

  it('should set new stock when call setStock method', () => {
    const item = new Item(mockExchangeItem)
    const initialStock = 10
    const expectedStock = 100

    item.$stock = initialStock
    item.setStock(expectedStock)

    expect(item.getStock()).toBe(expectedStock)
  })

  it('should have getStockLeft method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getStockLeft).toBeDefined()
  })

  it('should return stock left when call getStockLeft method', () => {
    const item = new Item(mockExchangeItem)
    const expectedStockLeft = 10

    item.$stock = 20
    item.$stockReadyToBuy = 10

    expect(item.getStockLeft()).toBe(expectedStockLeft)
  })

  it('should have canIncreaseSelectedStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.canIncreaseSelectedStock).toBeDefined()
  })

  it('should return false when call canIncreaseSelectedStock and it cant', () => {
    const item = new Item(mockExchangeItem)
    const expectedValue = false

    item.$stock = 1
    item.$stockReadyToBuy = 1

    expect(item.canIncreaseSelectedStock()).toBe(expectedValue)
  })

  it('should return true when call canIncreaseSelectedStock and it can', () => {
    const item = new Item(mockExchangeItem)
    const expectedValue = true

    item.$stock = 2
    item.$stockReadyToBuy = 1

    expect(item.canIncreaseSelectedStock()).toBe(expectedValue)
  })

  it('should have canDecreaseSelectedStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.canDecreaseSelectedStock).toBeDefined()
  })

  it('should return false when call canDecreaseSelectedStock and it cant', () => {
    const item = new Item(mockExchangeItem)
    const expectedValue = false

    item.$stockReadyToBuy = 0

    expect(item.canDecreaseSelectedStock()).toBe(expectedValue)
  })

  it('should return true when call canDecreaseSelectedStock and it can', () => {
    const item = new Item(mockExchangeItem)
    const expectedValue = true

    item.$stockReadyToBuy = 1

    expect(item.canDecreaseSelectedStock()).toBe(expectedValue)
  })

  it('should have increaseSelectedStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.increaseSelectedStock).toBeDefined()
  })

  it('if allowed should increase selected stock when call increaseSelectedStock', () => {
    const item = new Item(mockExchangeItem)
    const expectedStockReadyToBuy = 1

    item.$stockReadyToBuy = 0
    item.canIncreaseSelectedStock = jest.fn().mockReturnValue(true)

    item.increaseSelectedStock()

    expect(item.getSelectedStock()).toBe(expectedStockReadyToBuy)
  })

  it('if NOT allowed should NOT increase selected stock when call increaseSelectedStock', () => {
    const item = new Item(mockExchangeItem)
    const expectedStockReadyToBuy = 0

    item.$stockReadyToBuy = 0
    item.canIncreaseSelectedStock = jest.fn().mockReturnValue(false)

    item.increaseSelectedStock()

    expect(item.getSelectedStock()).toBe(expectedStockReadyToBuy)
  })

  it('should have decreaseSelectedStock method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.decreaseSelectedStock).toBeDefined()
  })

  it('if allowed should decrease selected stock when call decreaseSelectedStock', () => {
    const item = new Item(mockExchangeItem)
    const expectedStockReadyToBuy = 0

    item.$stockReadyToBuy = 1
    item.canDecreaseSelectedStock = jest.fn().mockReturnValue(true)

    item.decreaseSelectedStock()

    expect(item.getSelectedStock()).toBe(expectedStockReadyToBuy)
  })

  it('if NOT allowed should NOT decrease selected stock when call decreaseSelectedStock', () => {
    const item = new Item(mockExchangeItem)
    const expectedStockReadyToBuy = 0

    item.$stockReadyToBuy = 0
    item.canDecreaseSelectedStock = jest.fn().mockReturnValue(false)

    item.decreaseSelectedStock()

    expect(item.getSelectedStock()).toBe(expectedStockReadyToBuy)
  })

  it('should have getName method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getName).toBeDefined()
  })

  it('should return name when call getName method', () => {
    const item = new Item(mockExchangeItem)
    const expectedName = mockExchangeItem.productName

    expect(item.getName()).toBe(expectedName)
  })

  it('should have getPrice method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getPrice).toBeDefined()
  })

  it('should return price when call getPrice method', () => {
    const item = new Item(mockExchangeItem)
    const expectedPrice = mockExchangeItem.price

    expect(item.getPrice()).toBe(expectedPrice)
  })

  it('should have getItemTotalPrice method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getItemTotalPrice).toBeDefined()
  })

  it('should return totalPrice when call getPrice method', () => {
    const item = new Item(mockExchangeItem)
    const expectedTotalPrice = 20

    item.getSelectedStock = jest.fn().mockReturnValue(10)
    item.getPrice = jest.fn().mockReturnValue(2)

    expect(item.getItemTotalPrice()).toBe(expectedTotalPrice)
  })

  it('should have getDescription method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getDescription).toBeDefined()
  })

  it('should return description when call getDescription method', () => {
    const item = new Item(mockExchangeItem)
    const expectedDescription = mockExchangeItem.productDescription

    expect(item.getDescription()).toBe(expectedDescription)
  })

  it('should have buildFavorite method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.buildFavorite).toBeDefined()
  })

  it('should set Favorite as true when call buildFavorite method and value is "1"', () => {
    const item = new Item(mockExchangeItem)
    const mockFavorite = '1'
    const expectedFavorite = true

    item.buildFavorite(mockFavorite)

    expect(item.$favorite).toBe(expectedFavorite)
  })

  it('should set Favorite as false when call buildFavorite method and value is 0', () => {
    const item = new Item(mockExchangeItem)
    const mockFavorite = 0
    const expectedFavorite = false

    item.buildFavorite(mockFavorite)

    expect(item.$favorite).toBe(expectedFavorite)
  })

  it('should have getIsFavorite method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.getIsFavorite).toBeDefined()
  })

  it('should return $favorite value when call getIsFavorite method', () => {
    const item = new Item(mockExchangeItem)
    const expectedValue = true

    item.$favorite = true

    expect(item.getIsFavorite()).toBe(expectedValue)
  })

  it('should have setAsFavorite method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.setAsFavorite).toBeDefined()
  })

  it('should set item as favorite when call setAsFavorite method', () => {
    const item = new Item(mockExchangeItem)
    const expectedFavorite = true

    item.$favorite = undefined
    item.setAsFavorite()

    expect(item.getIsFavorite()).toBe(expectedFavorite)
  })

  it('should have removeFromFavorite method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.removeFromFavorite).toBeDefined()
  })

  it('should set item as NOT favorite when call removeFromFavorite method', () => {
    const item = new Item(mockExchangeItem)
    const expectedFavorite = false

    item.$favorite = undefined
    item.removeFromFavorite()

    expect(item.getIsFavorite()).toBe(expectedFavorite)
  })

  it('should have toggleFavorite method', () => {
    const item = new Item(mockExchangeItem)

    expect(item.toggleFavorite).toBeDefined()
  })

  it('should toggle $favorite value when call toggleFavorite method', () => {
    const item = new Item(mockExchangeItem)

    item.$favorite = true
    item.toggleFavorite()

    expect(item.getIsFavorite()).toBe(false)

    item.toggleFavorite()

    expect(item.getIsFavorite()).toBe(true)
  })
})
