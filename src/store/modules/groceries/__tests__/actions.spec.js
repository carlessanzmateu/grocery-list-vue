import actions from '@/store/modules/groceries/actions'
import { MockItem } from '@/shared/models/__mocks__/item'
import { mockExchangeItem } from '@/shared/models/__mocks__/exchangeItem'
import groceryListService from '@/shared/services/grocery-list.service'

jest.mock('@/shared/services/grocery-list.service.js')

describe('groceries/actions', () => {
  let store

  beforeEach(() => {
    store = {
      state: {},
      commit: jest.fn(),
      dispatch: jest.fn(),
    }
  })

  it('should have getAllGroceries action', () => {
    expect(actions.getAllGroceries).toBeDefined()
  })

  it('should get all groceries from server when call getAllGroceries action', async () => {
    const serviceMockResponse = {
      data: [
        mockExchangeItem
      ]
    }

    groceryListService.getAllGroceries = jest.fn().mockReturnValue(serviceMockResponse)
    await actions.getAllGroceries(store)

    expect(groceryListService.getAllGroceries).toHaveBeenCalled()
  })

  it('should get set groceries from server and map the cart when call getAllGroceries action', async () => {
    const firstExpectedCommitCallPayload = 'setAllGroceries'
    const secondExpectedCommitCallPayload = 'mapCartAfterNavigationFullList'
    const serviceMockResponse = {
      data: [
        mockExchangeItem
      ]
    }

    groceryListService.getAllGroceries = jest.fn().mockReturnValue(serviceMockResponse)
    await actions.getAllGroceries(store)

    expect(store.commit).toHaveBeenNthCalledWith(1, firstExpectedCommitCallPayload, [new MockItem()])
    expect(store.commit).toHaveBeenNthCalledWith(2, secondExpectedCommitCallPayload)
  })

  it('should have getFavorites action', () => {
    expect(actions.getFavorites).toBeDefined()
  })

  it('should get all favorites from server when call getFavorites action', async () => {
    const serviceMockResponse = {
      data: [
        mockExchangeItem
      ]
    }

    groceryListService.getAllFavorites = jest.fn().mockReturnValue(serviceMockResponse)
    await actions.getFavorites(store)

    expect(groceryListService.getAllFavorites).toHaveBeenCalled()
  })

  it('should get set favorites from server and map the cart when call getFavorites action', async () => {
    const firstExpectedCommitCallPayload = 'setFavorites'
    const secondExpectedCommitCallPayload = 'mapCartAfterNavigationFavorites'
    const serviceMockResponse = {
      data: [
        mockExchangeItem
      ]
    }

    groceryListService.getAllFavorites = jest.fn().mockReturnValue(serviceMockResponse)
    await actions.getFavorites(store)

    expect(store.commit).toHaveBeenNthCalledWith(1, firstExpectedCommitCallPayload, [new MockItem()])
    expect(store.commit).toHaveBeenNthCalledWith(2, secondExpectedCommitCallPayload)
  })

  it('should have setItemAsFavorite action', () => {
    expect(actions.setItemAsFavorite).toBeDefined()
  })

  it('should get update favorite item when call getFavorites action', async () => {
    const item = new MockItem()

    await actions.setItemAsFavorite(store, item)

    expect(groceryListService.updateGrocery).toHaveBeenCalled()
  })
})
