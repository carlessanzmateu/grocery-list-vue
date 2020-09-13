import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/grocery-list/GroceryList.view'

describe('Home', () => {
  let groceriesModule, store, wrapper
  const localVue = createLocalVue()
  localVue.use(Vuex)

  beforeEach(() => {
    groceriesModule = {
      state: {
        fullList: [],
        cart: []
      },
      mutations: {
        addItemToCart: jest.fn(),
        increaseItemFromCart: jest.fn(),
        removeItemFromCart: jest.fn()
      },
      actions: {
        getAllGroceries: jest.fn(),
        setItemAsFavorite: jest.fn()
      }
    }

    store = new Vuex.Store({
      modules: {
        groceries: {
          namespaced: true,
          ...groceriesModule
        }
      }
    })

    wrapper = shallowMount(Home, {
      localVue,
      store
    })
  })

  it('should create', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should have toggleFavorite method', () => {
    expect(wrapper.vm.toggleFavorite).toBeDefined()
  })

  it('should toggle item favorite property when call toggleFavorite method', () => {
    wrapper.vm.toggleFavorite()

    expect(groceriesModule.actions.setItemAsFavorite).toHaveBeenCalled()
  })

  it('should have buyItem method', () => {
    expect(wrapper.vm.buyItem).toBeDefined()
  })

  it('should buy item when call buyItem method', () => {
    wrapper.vm.buyItem()

    expect(groceriesModule.mutations.addItemToCart).toHaveBeenCalled()
  })

  it('should have addItem method', () => {
    expect(wrapper.vm.addItem).toBeDefined()
  })

  it('should add item to cart when call addItem method', () => {
    wrapper.vm.addItem()

    expect(groceriesModule.mutations.increaseItemFromCart).toHaveBeenCalled()
  })

  it('should have removeItem method', () => {
    expect(wrapper.vm.removeItem).toBeDefined()
  })

  it('should remove item from cart when call removeItem method', () => {
    wrapper.vm.removeItem()

    expect(groceriesModule.mutations.removeItemFromCart).toHaveBeenCalled()
  })
})