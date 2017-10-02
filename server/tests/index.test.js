import request from 'supertest';
import server from '../../index';

describe('/GET: /api/v1/', () => {
  it('should return status code 404 when user visit an unregistered route', (done) => {
    request(server)
      .get('/api/v1/ere')
      .expect(404)
      .end(done);
  });
  it('should return status code 200 when user visits the index route', (done) => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end(done);
  });
});
