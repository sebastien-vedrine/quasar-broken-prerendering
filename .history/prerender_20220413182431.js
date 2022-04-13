const path = require('path');
const PrerenderPlugin = require('prerender-plugin');

new PrerenderPlugin({
  source: path.join(__dirname, 'dist/spa'),
  target: path.join(__dirname, 'public'),
  routes: ['/'],
  capture: {
    delay: 3000,
    // selector: 'q-app',
    // event: 'myEventRaisedFromDocument'
  },
}).apply();
