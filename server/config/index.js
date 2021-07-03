
const productionConfig = require('./prod');
const stagingConfig = require('./test');
const devConfig = require('./dev');
require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;

let configBuffer;

switch (NODE_ENV) {
   case 'production':
      configBuffer = productionConfig;
      break;
   case 'test':
      configBuffer = stagingConfig;
      break;
   default:
      configBuffer = devConfig;
}

module.exports = configBuffer;