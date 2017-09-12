import express from 'express';
import UserCtrl from '../controllers/user';

const router = express.Router();

router.route('/signup')
/** POST api/users - Create a new user */
  .post(UserCtrl.create);

router.route('/signin')
/** POST api/login - Log in a user */
  .post(UserCtrl.login);

export default router;
