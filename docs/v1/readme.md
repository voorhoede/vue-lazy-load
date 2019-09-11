# @voorhoede/vue-lazy-load

**Component to lazy load content using the Intersection Observer API**

This compenent uses the [Intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect when its content enters or exists the browser's viewport. The content only loads just before it comes into view, reducing initial page weight and load time.

[[toc]]

## Installation

```
npm install @voorhoede/vue-lazy-load
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueLazyLoad from '@voorhoede/vue-lazy-load'

Vue.use(VueLazyLoad)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="@voorhoede/vue-lazy-load/dist/vue-lazy-load.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/@voorhoede/vue-lazy-load"></script>
```

## Examples

::: demo
<vue-lazy-load><b>This content is lazy loaded</b></vue-lazy-load>
:::

<!-- The API section is auto generated, don't touch please -->

## API

### vue-lazy-load 

#### slots 

- `default` 

- `placeholder` Content that is loaded as a placeholder until it comes into view 

#### props 

- `root-margin` ***String*** (*optional*) `default: '0px 0px 0px 0px'` 

  See InetersectionOberserver rootMargin [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) 

- `threshold` ***Number|Array*** (*optional*) 

  See InetersectionOberserver treshold [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) 
