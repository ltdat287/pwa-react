require('ignore-styles');
// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
  presets: ['babel-preset-es2015', 'babel-preset-react'].map(require.resolve)
});

// Import the rest of our application.
module.exports = require('./server.js');
