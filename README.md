# UserAPI
A simple registration and log in API built using NodeJS and Postgres

## Application Features
This API has just two features used in buidling any application the involves User sign up and sign in. The API uses JSON Web Token (JWT) for authentication and to the an extent the API is properly validated

## What users can do with the UserAPI
- Register (sign Up)
- Log in (sign In)

# Built with
- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [Sequelize](http://docs.sequelizejs.com/) Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
- [PostgreSQL](https://www.postgresql.org/) A powerful, open source object-relational database system.
- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Mocha](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [NodeJS](nodejs.org/en) for testing [Javascript](javascript.com) applications.

 
 # Installation
 - Install [NodeJS](http://nodejs.org/en) and [PostgreSQL](https://www.postgresql.org/) on your machine
 - Clone the repository by running  `git clone https://github.com/codestaintin/UserAPI.git`
 - Change to working directory to UserAPI `cd /UserAPI`
 - Run `npm install` to install all dependencies
 - It is advisable to install sequelize CLI globally to ease database migrations `npm install -g sequelize-cli`
 - Create a `.env` file that conforms to the `.env.Sample` provided for your environment variables
 - Run `sequelize db:migrate` for database migrations
 - Run `sequelize` to have access to all other sequelize commands, e.g `sequelize db:migrate:undo:all` is for undoing       migrations
 - Run `npm start` to start the application.
 - Run `npm test` to run application tests.

 # Acknowledgments
 - [Medium](medium.com) A great and educating blog I learnt a lot from.
 - [StackOverflow](stackoverflow.com) My run to website in times of error and knowledge test.
 - [Github](github.com) For making it easy for me to get access to my repositories anywhere, anytime. Thanks!!!!
 - [Scotch](scotch.io) For all the awesome tutorials. Thanks!!!!
