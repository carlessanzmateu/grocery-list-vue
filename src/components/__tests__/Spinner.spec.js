import { shallowMount } from '@vue/test-utils'
import Spinner from '@/components/Spinner.vue'

describe('Spinner', () => {
  let wrapper
  function createWrapper() {
    return shallowMount(Spinner)
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
