const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1/search', () => {

  // invalid request
  it('responds with a 400 when the search params are missing', (done) => {
    request(app)
      .get('/api/v1/search')
      .set('Accept', 'application/json')
      .expect(400)
      .end(done);
  });

  // happy path response with results
  it('responds with a 200 and data for valid requests', (done) => {
    request(app)
      .get('/api/v1/search?query=cricket')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){

        // to do assert checks on the response later

        done();
      })
  });

  // empty news items response when no results matched
  it('responds with a 200 and empty newsItems array ', (done) => {
    request(app)
      .get('/api/v1/search?query=noresultsmatchedforthisinput')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { newsItems: [] })
      .end(done);
  });



  // service unavailable test
  // to be tested with service mocks later


});
