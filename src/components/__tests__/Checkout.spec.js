import { shallowMount } from '@vue/test-utils'
import Checkout from '@/components/Checkout.vue'
import { MockItem } from '@/shared/models/__mocks__/item'

describe('Checkout', () => {
  let wrapper
  function createWrapper() {
    return shallowMount(Checkout)
  }

  it('should create', () => {
    wrapper = createWrapper()
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match html', () => {
    wrapper = createWrapper()
    expect(wrapper.element).toMatchSnapshot()
  })
})
