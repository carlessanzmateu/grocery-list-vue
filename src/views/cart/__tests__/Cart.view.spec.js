import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from '@/views/cart/Cart.view'

describe('Cart', () => {
  let groceriesModule, store, wrapper
  const localVue = createLocalVue()
  localVue.use(Vuex)

  beforeEach(() => {
    groceriesModule = {
      state: {
        cart: []
      },
      mutations: {
        increaseItemFromCart: jest.fn(),
        removeItemFromCart: jest.fn()
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

    wrapper = shallowMount(Cart, {
      localVue,
      store
    })
  })

  it('should create', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should have addItem method', () => {
    expect(wrapper.vm.addItem).toBeDefined()
  })

  it('should increase cart item amount when call addItem method', () => {
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