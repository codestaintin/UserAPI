// Import dependencies and model
import jwt from 'jsonwebtoken';
import Validator from 'validatorjs';
import _ from 'lodash';
import dotenv from 'dotenv';
import db from '../models';

dotenv.config();

const secret = process.env.SECRET_TOKEN;

const userController = {
  create(req, res) {
    const User = db.User;
    const body = req.body;
    const validator = new Validator(body, db.User.signUpRules());
    if (validator.passes()) {
      if (body.verify_password !== body.password) {
        return res.status(401).send({ message: 'Password does not match' });
      }
      User.findOne({
        where: { email: body.email }
      })
        .then((user) => {
          if (user.email === body.email) {
            return res.status(404).json({ code: 404, message: `User with ${user.email}  already exists` });
          }
          User.create(body)
            .then((savedUser) => {
              const data = _.pick(savedUser, ['id', 'fullname', 'email', 'phone']);
              const myToken = jwt.sign(data, secret, { expiresIn: 24 * 60 * 60 });
              return res.status(200).send({ token: myToken, message: 'Registration Succesful', data });
            })
            .catch(error => res.status(500).send(error));
        })
        .catch((error) => {
          return res.status(500).send('An error occured while trying to create a user ', error.message);
        });
    } else {
      return res.status(401).json({ message: validator.errors.all() });
    }
  },
  login(req, res) {
    const User = db.User;
    const body = _.pick(req.body, ['email', 'password']);
    const validator = new Validator(body, db.User.signInRules());
    if (validator.fails()) {
      return res.status(401).json({ message: validator.errors.all() });
    }
    User.findOne({
      where: {
        email: body.email
      }
    })
      .then((user) => {
        if (!user) {
          return Promise.reject({ code: 404, message: 'User not found' });
        }
        if (!user.comparePassword(user, body.password)) {
          return res.status(400).send({ message: 'Password does not match' });
        }
        const data = _.pick(user, ['id', 'fullname', 'email', 'phone']);
        const myToken = jwt.sign(data, secret);
        return res.status(200).json({ token: myToken, message: 'Login Successful' });
      })
      .catch(error => res.send(error));
  },
};

export default userController;
