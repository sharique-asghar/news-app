const express = require("express");
const isProd = Boolean(process.env.NODE_ENV === "production");
const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});