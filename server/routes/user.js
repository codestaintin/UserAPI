import express from 'express';
import UserCtrl from '../controllers/user';

const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     description: Register a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fullname
 *         description: Full name of the user.
 *         in: formData
 *         required: true
 *         type: string
 *        - name: email
 *         description: User's email.
 *         in: formData
 *         required: true
 *         type: email
 *         - name: phone
 *         description: User's phone number.
 *         in: formData
 *         required: true
 *         type: string
 *         - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: signup
 */
router.route('/signup')
/** POST api/users - Create a new user */
  .post(UserCtrl.create);

/**
 * @swagger
 * /signin:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email to use for login.
 *         in: formData
 *         required: true
 *         type: email
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
router.route('/signin')
/** POST api/login - Log in a user */
  .post(UserCtrl.login);

export default router;
