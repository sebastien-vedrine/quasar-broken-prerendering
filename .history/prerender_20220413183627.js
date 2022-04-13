const fs = require('fs');
// const path = require('path');
// const PrerenderPlugin = require('prerender-plugin');

fs.rmSync('public', { recursive: true, force: true });

// new PrerenderPlugin({
//   source: path.join(__dirname, 'dist/spa'),
//   target: path.join(__dirname, 'public'),
//   routes: ['/'],
//   capture: {
//     delay: 3000,
//   },
// }).apply();
