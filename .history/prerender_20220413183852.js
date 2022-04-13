const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const PrerenderPlugin = require('prerender-plugin');

fs.rmSync('public', { recursive: true, force: true });

childProcess.execSync('quasar build', { stdio: [0, 1, 2] });

new PrerenderPlugin({
  source: path.join(__dirname, 'dist/spa'),
  target: path.join(__dirname, 'public'),
  routes: ['/'],
  capture: {
    delay: 3000,
  },
}).apply();
