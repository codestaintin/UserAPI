import express from 'express';
import UserCtrl from '../controllers/user';
import token from '../middleware/authenticate';

const router = express.Router();

router.use(token);

router.route('/users')
/** POST api/users - Create a new user */
  .post(UserCtrl.create);

router.route('/login')
/** POST api/login - Log in a user */
  .post(UserCtrl.login);

export default router;
