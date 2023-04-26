const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app');

describe('View', () => {
  it('should return the pipeline definition', (done) => {
    request(app)
      .get('/pipeline/test-pipeline')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.include('Test Pipeline');
        done();
      });
  });
});
