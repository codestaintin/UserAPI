const dotenv = require('dotenv');

dotenv.config();

const config = {
  production: {
    username: 'postgres',
    password: 1234,
    database: 'user-api',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  development: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
