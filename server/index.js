require("dotenv").config();
const express = require("express");
const routes = require('./routes');
const log4js = require('log4js');

const isProd = Boolean(process.env.NODE_ENV === "production");
const PORT = process.env.PORT || 8080;

const app = express();

log4js.configure('log4js.json');
app.use(log4js.connectLogger(log4js.getLogger("http"), {
    level: 'auto'
}));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
