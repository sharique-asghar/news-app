const axios = require("axios");
const tracer = require("../utils/tracer.js");
const urlConfig = require("../url.js");
const {buildOptions, responseHandler} = require('../utils/apiHandler.js');
require("dotenv").config();
const TRACER_TYPE = "out";

const newsController = {
  getTopHeadlines: async (req, res) => {
    req.query = {
      ...req.query,
      apiKey: process.env.API_KEY
    };

    let url = encodeURI(urlConfig.getTopHeadlines);
    let response = null;

    try {
      const options = buildOptions(req);
      tracer.trace(req, url, options, TRACER_TYPE);
      response = await axios.get(url, options);
      console.log(response);
      res.status(200).send(responseHandler(response));
    } catch (err) {
      res.status(500)
        .send(responseHandler(response, err, "Error in fetching headlines"));
    }

  },
}

module.exports = newsController;