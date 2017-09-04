import userRoutes from './user';

export default function routes(app) {
  app.use('/api', userRoutes);
  // app.use('/api/*', (req, res) => res.status(404).json('Oops! 404, This route does not exist'));
}
