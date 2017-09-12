import express from 'express';
import userRoutes from './user';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'Welcome to User API'
  });
});

router.use('/users', userRoutes);

export default router;
