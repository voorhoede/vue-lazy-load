
import { shallowMount } from '@vue/test-utils'
import { intersectionObserver } from '@shopify/jest-dom-mocks';
import VueLazyLoad from './vue-lazy-load.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueLazyLoad)
  expect(wrapper.exists()).toBe(true)
})

test('Render content', () => {
  const contentHtml = '<div class="content"></div>'

  const wrapper = shallowMount(VueLazyLoad, {
    slots: {
      default: contentHtml,
    },
  })

  expect(wrapper.html()).toContain(contentHtml)
})

test('Shows placeholder', () => {
  const placeholderHtml = '<div class="placeholder"></div>'
  intersectionObserver.mock()

  const wrapper = shallowMount(VueLazyLoad, {
    slots: {
      placeholder: placeholderHtml,
    },
  })

  expect(wrapper.html()).toContain(placeholderHtml)
  intersectionObserver.restore();
})
