const path = require('path')
const PrerenderPlugin = require('prerender-plugin')

console.log(path.join(__dirname, 'public/vue'))

new PrerenderPlugin({
  source: path.join(__dirname, 'vue/dist/spa'),
  target: path.join(__dirname, 'public/vue'),
  routes: ['/'],
  capture: {
    delay: 3000,
    // selector: 'q-app',
    // event: 'myEventRaisedFromDocument'
  },
}).apply()