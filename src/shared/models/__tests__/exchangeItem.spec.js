import ExchangeItem from '@/shared/models/ExchangeItem'
import { MockItem } from '@/shared/models/__mocks__/item'

describe('ExchangeItem', () => {
  let mockItem

  beforeEach(() => {
    mockItem = new MockItem()
  })

  it('should create', () => {
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem).toBeDefined()
  })

  it('should have getId method', () => {
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem.getId).toBeDefined()
  })

  it('should have buildFavorite method', () => {
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem.buildFavorite).toBeDefined()
  })

  it('should map item propperly', () => {
    const expectedFavoriteValue = 0
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem.id).toBe(mockItem.getId())
    expect(exchangeItem.image_url).toBe(mockItem.getImage())
    expect(exchangeItem.stock).toBe(mockItem.getStockLeft())
    expect(exchangeItem.productName).toBe(mockItem.getName())
    expect(exchangeItem.price).toBe(mockItem.getPrice())
    expect(exchangeItem.productDescription).toBe(mockItem.getDescription())
    expect(exchangeItem.favorite).toBe(expectedFavoriteValue)
  })

  it('should return id when call getId method', () => {
    const expectedId = mockItem.getId()
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem.getId()).toBe(expectedId)
  })

  it('should return 0 when call buildFavorite method and item is NOT favorite', () => {
    const expectedFavorite = 0
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem.favorite).toBe(expectedFavorite)
  })

  it('should return 1 when call buildFavorite method and item IS favorite', () => {
    const expectedFavorite = '1'
    mockItem.setAsFavorite()
    const exchangeItem = new ExchangeItem(mockItem)

    expect(exchangeItem.favorite).toBe(expectedFavorite)
  })
})
