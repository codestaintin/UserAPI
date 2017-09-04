import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

// Setup the express app
const app = express();


// Port configuration
const hostname = 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

// Create Server
const server = http.createServer(app);

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API routes
routes(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Sorry, This endpoint does not exist'
}));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


export default app;
