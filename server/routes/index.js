import userController from '../controllers/user';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to User API'
    });
  });
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
 *         in: body
 *         required: true
 *         type: string
 *       - name: email
 *         description: User's email.
 *         in: body
 *         required: true
 *         type: email
 *       - name: phone
 *         description: User's phone number.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: signup successful
 */
  router.route('/users/signup').post(userController.create);
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
 *         in: body
 *         required: true
 *         type: email
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
  router.route('/users/signin').post(userController.login);
};

export default routes;
