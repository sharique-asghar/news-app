module.exports = {
  buildOptions: (req, headers) => {
    const options = {
        params: req.query || {},
        headers: headers || {}
    };

    options.headers["Content-Type"] = "application/json";
    

    return options;
  },

  responseHandler: (response, error, defaultMessage) => {
    try {
      if (!error && response.status === 200) {
        response.statusCode = 1;
        return response.data;
      } else {
        return {
          statusCode: 0,
          statusMessage: response.message || defaultMessage
        };
      }
    } catch (ex) {
      return {
        statusCode: 0,
        statusMessage: defaultMessage || "Internal server error",
        error,
        response
      };
    }
  }
};