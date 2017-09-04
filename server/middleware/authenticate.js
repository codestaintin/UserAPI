import jwt from 'jsonwebtoken';
import User from '../models/users';

const excluded = ['/login', '/users'];

const authenticate = (req, res, next) => {
  // console.log("url ",req.url);
  if (excluded.indexOf(req.url) > -1) return next();
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, 'secretKey', (error, decoded) => {
      if (error) {
        // console.error('JWT Verification Error', error);
        return res.status(403).json({ message: 'JWT Verification Error', error });
      }
      // req.decoded = decoded;
      // return next();
      User.findById(decoded.id)
        .then((user) => {
          if (!user) {
            return Promise.reject('There is no user with this token');
          }
          req.decoded = decoded;
          return next();
        })
        .catch(err => res.status(404).json(err));
    });
  } else {
    res.status(403).send('Token not provided');
  }
};

export default authenticate;
