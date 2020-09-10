import { shallowMount } from '@vue/test-utils'
import CardList from '@/components/CardList.vue'
import { MockItem } from '@/shared/models/__mocks__/item'

describe('CardList', () => {
  let wrapper
  function createWrapper() {
    return shallowMount(CardList, {
      propsData: {
        items: [new MockItem(), new MockItem()],
      }
    })
  }

  it('should create', () => {
    wrapper = createWrapper()
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match html', () => {
    wrapper = createWrapper()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should have toggleFavorite method', () => {
    wrapper = createWrapper()

    expect(wrapper.vm.toggleFavorite).toBeDefined()
  })

  it('should emit toggle-favorite event when call toggleFavorite method', () => {
    wrapper = createWrapper()

    wrapper.vm.toggleFavorite()

    expect(wrapper.emitted()['toggle-favorite'])
  })

  it('should have buyItem method', () => {
    wrapper = createWrapper()

    expect(wrapper.vm.buyItem).toBeDefined()
  })

  it('should emit buy-item event when call buyItem method', () => {
    wrapper = createWrapper()

    wrapper.vm.buyItem()

    expect(wrapper.emitted()['buy-item'])
  })
})
