
const helpers = {
  updateQueryStringParameter: (uri, key, value) => {
    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
    var separator = uri.indexOf('?') !== -1 ? '&' : '?'
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2')
    } else {
      return uri + separator + key + '=' + value
    }
  },

  isEmpty: (object) => {  
    return Object.keys(object).length === 0
  },

  getCompleteUrlConfig: (baseUrl, config) => {
    for (let key in config) {
      config[key] = baseUrl + config[key];
    }

    return config;
  }
}

module.exports = helpers;