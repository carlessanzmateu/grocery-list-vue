import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Favorites from '@/views/favorites/Favorites.view'

describe('Favorites', () => {
  let groceriesModule, store, wrapper
  const localVue = createLocalVue()
  localVue.use(Vuex)

  beforeEach(() => {
    groceriesModule = {
      state: {
        favorites: []
      },
      mutations: {
        addItemToCart: jest.fn()
      },
      actions: {
        getFavorites: jest.fn(),
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

    wrapper = shallowMount(Favorites, {
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
})