const express = require('express');
const router = express.Router();

const newsController = require('./controllers/newsController');

router.get('/health-check', (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.get('/api/top-headlines', newsController.getTopHeadlines);
router.get('/api/everything', newsController.getAnyNews);

module.exports = (req, res, next) => {
  router(req, res, next);
};