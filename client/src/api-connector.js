const ApiConnector = (()=>{
    var self = {};
    var pub = {};

    self.apiPath = "http://localhost:5000/api/v1"; // to be fetched from the env later

    self.get = (url) => {    
        let options = {
            method: 'GET'
        };
        return fetch(url, options).then(response => response.text());
    };


    pub.searchNews = (text, cb) => {
        self.get(`${self.apiPath}/search?query=${text}`).then((response) => {
            cb( JSON.parse(response) );
        });
    };

    return pub;
})();

module.exports = ApiConnector;
