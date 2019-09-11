
import { shallowMount } from '@vue/test-utils'
import VueLazyLoad from './vue-lazy-load.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueLazyLoad)
  expect(wrapper.exists()).toBe(true)
})
