const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app');

describe('Pipeline', () => {
  it('should return a list of pipelines', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should create a new pipeline', (done) => {
    request(app)
      .post('/create')
      .send({ pipelineName: 'Test Pipeline' })
      .expect(302)
      .end((err, res) => {
        expect(res.header.location).to.match(/^\/pipeline\/[a-zA-Z0-9\-]+$/);
        done();
      });
  });
});
