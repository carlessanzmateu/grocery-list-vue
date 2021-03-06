import { shallowMount } from '@vue/test-utils'
import Checkout from '@/components/Checkout.vue'

describe('Checkout', () => {
  let wrapper
  function createWrapper() {
    return shallowMount(Checkout, {
      propsData: {
        totalAmount: 10
      }
    })
  }

  it('should create', () => {
    wrapper = createWrapper()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should match html', () => {
    wrapper = createWrapper()
    expect(wrapper.element).toMatchSnapshot()
  })
})
