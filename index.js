import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import routes from './server/routes/index';

// Setup the express app
const app = express();
const router = express.Router();

// SwaggerJSDoc spec
const swaggerDefinition = {
  info: {
    title: 'UserAPI',
    version: '1.0.0',
    description: 'A simple User API',
  },
  host: 'localhost:3000',
  basePath: '/api/v1/',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: { swaggerDefinition },
  // path to the API docs
  apis: ['./server/routes/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Port configuration
const hostname = 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

// Create Server
const server = http.createServer(app);

routes(router);

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API routes
app.use('/api/v1', router);

app.get('/api/v1/*', (req, res) => res.status(200).send({
  message: 'Sorry, This endpoint does not exist'
}));

// serve swagger
app.get('/swagger', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;
