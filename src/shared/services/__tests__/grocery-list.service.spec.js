import GroceryListService from '@/shared/services/grocery-list.service'
import http from '@/shared/http/index'

jest.mock('@/shared/http/index')

describe('GroceryListService', () => {
  it('should create', () => {
    const groceryListService = new GroceryListService()

    expect(groceryListService).toBeTruthy()
  })

  it('should have getAllGroceries method', () => {
    const groceryListService = new GroceryListService()

    expect(groceryListService.getAllGroceries).toBeDefined()
  })

  it('should get all groceries when call getAllGroceries method', () => {
    const groceryListService = new GroceryListService()
    const expectedGetPayload = 'http://localhost:3000/grocery'
    groceryListService.getAllGroceries()

    expect(http.get).toHaveBeenCalledWith(expectedGetPayload)
  })

  it('should have getAllFavorites method', () => {
    const groceryListService = new GroceryListService()

    expect(groceryListService.getAllFavorites).toBeDefined()
  })

  it('should get all favorites when call getAllFavorites method', () => {
    const groceryListService = new GroceryListService()
    const expectedGetPayload = 'http://localhost:3000/grocery?favorite=1'
    groceryListService.getAllFavorites()

    expect(http.get).toHaveBeenCalledWith(expectedGetPayload)
  })

  it('should have updateGrocery method', () => {
    const groceryListService = new GroceryListService()

    expect(groceryListService.updateGrocery).toBeDefined()
  })

  it('should update item when call updateGrocery method', () => {
    const groceryListService = new GroceryListService()
    const expectedGetPayload = 'http://localhost:3000/grocery/1'
    const mockItem = {
      getId: () => 1
    }

    groceryListService.updateGrocery(mockItem)

    expect(http.patch).toHaveBeenCalledWith(expectedGetPayload, mockItem)
  })
})