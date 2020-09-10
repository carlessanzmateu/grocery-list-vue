import { shallowMount } from '@vue/test-utils'
import InlineCartCardList from '@/components/InlineCartCardList.vue'
import { MockItem } from '@/shared/models/__mocks__/item'

describe('InlineCartCardList', () => {
  let wrapper
  function createWrapper() {
    return shallowMount(InlineCartCardList, {
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

  it('should have addItem method', () => {
    wrapper = createWrapper()

    expect(wrapper.vm.addItem).toBeDefined()
  })

  it('should emit add-item event when call addItem method', () => {
    wrapper = createWrapper()

    wrapper.vm.addItem()

    expect(wrapper.emitted()['add-item'])
  })

  it('should have removeItem method', () => {
    wrapper = createWrapper()

    expect(wrapper.vm.removeItem).toBeDefined()
  })

  it('should emit remove-item event when call removeItem method', () => {
    wrapper = createWrapper()

    wrapper.vm.removeItem()

    expect(wrapper.emitted()['remove-item'])
  })
})
