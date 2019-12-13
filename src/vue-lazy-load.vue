<template>
  <div class="vue-lazy-load" :style="{
    minWidth: '1px',
    minHeigth: '1px'
  }">
    <slot v-if="isIntersected" />
    <!-- Content that is loaded as a placeholder until it comes into view -->
    <slot v-if="!isIntersected" name="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    /**
     * See InetersectionOberserver rootMargin [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
     */
    rootMargin: {
      type: String,
      default: '0px 0px 0px 0px',
    },
    /**
     * See InetersectionOberserver treshold [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
     */
    threshold: {
      type: [Number, Array],
      default: 0,
    },
  },
  data() {
    return {
      isIntersected: false,
      observer: null,
    }
  },
  mounted() {
    if ('IntersectionObserver' in window) {
      this.observe()
    } else {
      this.isIntersected = true
    }
  },
  beforeDestroy() {
    this.unobserve()
  },
  methods: {
    observe() {
      const { rootMargin, threshold } = this
      const config = { root: undefined, rootMargin, threshold }
      this.observer = new IntersectionObserver(this.onIntersection, config)
      this.observer.observe(this.$el)
    },
    onIntersection(entries) {
      this.isIntersected = entries.some((entry) => entry.intersectionRatio > 0)
      if (this.isIntersected) {
        this.unobserve()
      }
    },
    unobserve() {
      if ('IntersectionObserver' in window) {
        this.observer.unobserve(this.$el)
      }
    },
  },
}
</script>
