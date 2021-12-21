const request = require('request');

const NewsServiceConnector = (() => {
  const self = {};
  const pub = {};

  const guardianAPIKey = process.env.GUARDIAN_API_KEY;
  self.guardianAPIPath = `https://content.guardianapis.com/search?api-key=${guardianAPIKey}`;

  self.get = (url, cb) => {
    const options = {
      method: 'GET',
      url,
      headers: {}
    };

    request(options, (error, response) => {
      if (error) throw new Error(error);
      cb(response.body);
    });
  };

  // to add more - date filters, etc.
  pub.searchGuardianNews = (text, cb) => {
    self.get(`${self.guardianAPIPath}&q=${text}`, (response) => {
      cb(JSON.parse(response));
    });
  };

  return pub;
})();

module.exports = NewsServiceConnector;
