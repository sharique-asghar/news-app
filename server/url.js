const config = require("./config/index.js");
const BASE_URL = "https://newsapi.org";

const servicesUrlConfig = {
  getTopHeadlines: BASE_URL + config.TOP_HEADLINES_API
};

console.log("URL Config:", servicesUrlConfig);

module.exports = servicesUrlConfig;