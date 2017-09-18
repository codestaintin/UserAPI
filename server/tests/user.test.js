import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.use(chaiHttp);

describe('/POST User registration validation Test', () => {
  it('should return \'Password does not match\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Joseph',
        email: 'oluwashog@gmail.com',
        phone: '09091122466',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: 'Password does not match'
        });
        done();
      });
  });

  it('should return \'The password must be at least 6 characters.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Joseph',
        email: 'oluwashog@gmail.com',
        phone: '09091122466',
        password: 'pas'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            password: [
              'The password must be at least 6 characters.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The email field is required.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Joseph',
        email: '',
        phone: '09091122466',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            email: [
              'The email field is required.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The email format is invalid.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Joseph',
        email: 'oluwashogo',
        phone: '09091122466',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            email: [
              'The email format is invalid.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The fullname field is required.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: '',
        email: 'oluwashog@gmail.com',
        phone: '09091122466',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            fullname: [
              'The fullname field is required.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The password field is required.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Benjamin',
        email: 'oluwashog@gmail.com',
        phone: '09091122466',
        password: ''
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            password: [
              'The password field is required.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The phone must be at least 11 characters.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Benjamin',
        email: 'oluwashog@gmail.com',
        phone: '090911226',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            phone: [
              'The phone must be at least 11 characters.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The phone field is required.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Benjamin',
        email: 'oluwashog@gmail.com',
        phone: '',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            phone: [
              'The phone field is required.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The phone may not be greater than 14 characters.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Oluwashogo Benjamin',
        email: 'oluwashog@gmail.com',
        phone: '090911226098765',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            phone: [
              'The phone may not be greater than 14 characters.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'The fullname must be at least 4 characters.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signup')
      .set('Accept', 'application/json')
      .send({
        fullname: 'Ol',
        email: 'oluwashog@gmail.com',
        phone: '09091122609',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            fullname: [
              'The fullname must be at least 4 characters.'
            ]
          }
        });
        done();
      });
  });
});

describe('/POST User login validation Test', () => {
  it('should return ', (done) => {
    chai.request(server)
      .post('/api/v1/users/signin')
      .set('Accept', 'application/json')
      .send({
        email: 'oluwashoggmail.com',
        password: ''
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            password: [
              'The password field is required.'
            ]
          }
        });
        done();
      });
  });

  it('should return \'User not found, please register\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signin')
      .set('Accept', 'application/json')
      .send({
        email: 'oluwashoggmail.com',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal({
          message: 'User not found, please register'
        });
        done();
      });
  });

  it('should return \'The email field is required.\'', (done) => {
    chai.request(server)
      .post('/api/v1/users/signin')
      .set('Accept', 'application/json')
      .send({
        email: '',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        expect(res.body).to.deep.equal({
          message: {
            email: [
              'The email field is required.'
            ]
          }
        });
        done();
      });
  });
});
