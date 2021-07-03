const log4js = require('log4js');
const errorTracer = log4js.getLogger('error');
const isProd = Boolean(process.env.NODE_ENV === "production");

const LOG_SEPARATOR = "\n===================================";

module.exports = {
  trace: function (req, url, json, tracerType, error) {
    let tracer = this.getTracer(tracerType, error);
    try {
      json.method = json.method || "GET";

      let output = "\n";
      output += `URL: ${decodeURI(url)} \n`;
      output += `Method: ${json.method} \n`;

      // Keeping outgoing log on console too - without body

      if (json.params) {
        let params = JSON.parse(JSON.stringify(json.params));

        output += `Params: ${JSON.stringify(params)} \n`;
      }

      if (json.headers) {
        let headers = JSON.parse(JSON.stringify(json.headers));
        if (headers.Authorization) {
          delete headers.Authorization;
        }

        output += `Headers: ${JSON.stringify(headers)} \n`;
      }

      if (json.body) {
        if (typeof json.body === "object") {
          output += `Body: \`\`\`${JSON.stringify(json.body)}\`\`\` \n`;
        } else {
          output += `Body: \`\`\`${json.body}\`\`\` \n`;
        }
      }

      if (json.formData) {
        output += `Form Data: ${JSON.stringify(json.formData)} \n`;
      }

      if (json.method === "GET" && json.data) {
        output += `Data: ${JSON.stringify(json.data)} \n`;
      } else if (json.method === "GET" && json.qs) {
        output += `Query Params: ${JSON.stringify(json.qs)} \n`;
      }

      if (error) {
        output += `Response: \`\`\`${JSON.stringify(error)}\`\`\` \n`;
      }

      output += "\n";

      console.log(output);
      tracer.trace(output);
    } catch (e) {
      tracer.trace("Error in tracing");
    }
  },


  getTracer: function (tracerType, error) {
    let tracer;
    if (error) {
      return errorTracer;
    }

    tracer = log4js.getLogger(tracerType);
    if (!tracer) {
      return errorTracer;
    }

    return tracer;
  },

  log: function (message, data) {
    let output = "\n";
    output += `Message: ${message}\n`;

    if (data) {
      if (typeof data === "object") {
        data = JSON.stringify(data);
      }

      output += `Data: ${data} \n`;
    }

    output += "\n";

    errorTracer.trace(output);
  }
};
