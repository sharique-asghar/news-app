const express = require('express');
const path = require('path');
const router = express.Router();
const isProd = process.env.NODE_ENV === "production";

const newsController = require('./controllers/newsController');

router.get('/health-check', (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.get('/api/top-headlines', newsController.getTopHeadlines);
router.get('/api/everything', newsController.getAnyNews);

if (isProd) {
  // All other GET requests not handled before will return our React app
  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
  });
}

module.exports = (req, res, next) => {
  router(req, res, next);
};