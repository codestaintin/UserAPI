import jwt from 'jsonwebtoken';
import User from '../models/users';

const authenticate = (req, res, next) => {
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, 'secretKey', (error, decoded) => {
      if (error) {
        return res.status(403).json({ message: 'JWT Verification Error', error });
      }
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
