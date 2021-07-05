
const productionConfig = require('./prod');
const stagingConfig = require('./test');
const devConfig = require('./dev');
require("dotenv").config();
const { getCompleteUrlConfig } = require('../utils/helpers');

const NODE_ENV = process.env.NODE_ENV;
const BASE_URL = "https://newsapi.org";

let apiConfig;

switch (NODE_ENV) {
   case 'production':
      apiConfig = productionConfig;
      break;
   case 'test':
      apiConfig = stagingConfig;
      break;
   default:
      apiConfig = devConfig;
}

const config = getCompleteUrlConfig(BASE_URL, apiConfig);
console.log("URL Config:", config);

module.exports = config;