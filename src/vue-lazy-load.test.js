
import { shallowMount } from '@vue/test-utils'
import VueLazyLoad from './vue-lazy-load.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueLazyLoad)
  expect(wrapper.exists()).toBe(true)
})

test('Shows placeholder', () => {
  const placeholderHtml = '<div class="placeholder"></div>'

  const wrapper = shallowMount(VueLazyLoad, {
    slots: {
      placeholder: placeholderHtml,
    },
  })

  expect(wrapper.html()).toContain(placeholderHtml)
})
