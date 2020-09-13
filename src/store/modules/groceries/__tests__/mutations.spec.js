import mutations from '@/store/modules/groceries/mutations'
import { MockItem } from '@/shared/models/__mocks__/item'

describe('groceries/mutations', () => {
  let state

  beforeEach(() => {
    state = {}
  })

  it('should have setAllGroceries mutation', () => {
    expect(mutations.setAllGroceries).toBeDefined()
  })

  it('should set groceries when call setAllGroceries mutation', () => {
    const mockGroceries = 'mockGroceries'
    mutations.setAllGroceries(state, mockGroceries)

    expect(state.fullList).toBe(mockGroceries)
  })

  it('should have setFavorites mutation', () => {
    expect(mutations.setFavorites).toBeDefined()
  })

  it('should set favorites when call setFavorites mutation', () => {
    const mockFavorites = 'mockFavorites'
    mutations.setFavorites(state, mockFavorites)

    expect(state.favorites).toBe(mockFavorites)
  })

  it('should have addItemToCart mutation' , () => {
    expect(mutations.addItemToCart).toBeDefined()
  })

  it('should add item to cart if is not in cart list', () => {
    const initialItemToAdd = new MockItem()
    const expectedItem = new MockItem()

    expectedItem.increaseSelectedStock()

    state = {
      fullList: [
        initialItemToAdd
      ],
      cart: []
    }

    mutations.addItemToCart(state, initialItemToAdd)

    expect(state.cart[0]).toEqual(expectedItem)
  })

  it('should increase a cart item if already exist in cart', () => {
    const initialItemToAdd = new MockItem()

    state = {
      fullList: [
        initialItemToAdd
      ],
      cart: [
        initialItemToAdd
      ]
    }

    mutations.addItemToCart(state, initialItemToAdd)

    expect(state.cart[0]).toEqual(state.fullList[0])
  })

  it('should have increaseItemFromCart mutation' , () => {
    expect(mutations.increaseItemFromCart).toBeDefined()
  })

  it('should increase item in cart when call increaseItemFromCart mutation' , () => {
    const initialItemInCart = new MockItem()
    const expectedItemInCart = new MockItem()

    expectedItemInCart.increaseSelectedStock()

    state = {
      fullList: [
        initialItemInCart
      ],
      cart: [
        initialItemInCart
      ]
    }

    mutations.increaseItemFromCart(state, initialItemInCart)

    expect(state.cart[0]).toEqual(expectedItemInCart)
  })

  it('should NOT increase item in cart when call increaseItemFromCart mutation and item is not allowed to increase' , () => {
    const initialItemInCart = new MockItem()
    const expectedItemInCart = new MockItem()

    initialItemInCart.$stockReadyToBuy = 10
    initialItemInCart.$stock = 10

    expectedItemInCart.$stockReadyToBuy = 10
    expectedItemInCart.$stock = 10

    state = {
      fullList: [
        initialItemInCart
      ],
      cart: [
        initialItemInCart
      ]
    }

    mutations.increaseItemFromCart(state, initialItemInCart)

    expect(state.cart[0]).toEqual(expectedItemInCart)
  })

  it('should have removeItemFromCart mutation' , () => {
    expect(mutations.removeItemFromCart).toBeDefined()
  })

  it('should decrease item cart stock if is already in cart', () => {
    const initialItemInCart = new MockItem()
    const expectedItemInCart = new MockItem()

    initialItemInCart.$stockReadyToBuy = 10
    initialItemInCart.$stock = 10

    expectedItemInCart.$stockReadyToBuy = 10
    expectedItemInCart.$stock = 10

    expectedItemInCart.decreaseSelectedStock()

    state = {
      fullList: [
        initialItemInCart
      ],
      cart: [
        initialItemInCart
      ]
    }

    mutations.removeItemFromCart(state,initialItemInCart)

    expect(state.cart[0]).toEqual(expectedItemInCart)
  })

  it('should remove item from cart if stock gets 0', () => {
    const initialItemInCart = new MockItem()

    initialItemInCart.$stockReadyToBuy = 1

    state = {
      fullList: [
        initialItemInCart
      ],
      cart: [
        initialItemInCart
      ]
    }

    mutations.removeItemFromCart(state,initialItemInCart)

    expect(state.length).toBeUndefined()
  })
})
