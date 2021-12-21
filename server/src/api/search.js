const express = require('express');

const router = express.Router();

const newsService = require('../news-service-connector');

router.get('/', (req, res) => {
  const params = req.query;

  if (params && params.query) {
    newsService.searchGuardianNews(params.query, (newsResp) => {
      const searchResponse = {
        newsItems: []
      };

      if (!newsResp || !newsResp.response) {
        res.sendStatus(503);
      } else if (!newsResp.response.results) {
        res.json(searchResponse);
      } else {
        searchResponse.newsItems = newsResp.response.results;
        res.json(searchResponse);
      }
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
