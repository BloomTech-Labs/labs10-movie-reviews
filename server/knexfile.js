const keys = require('./config/keys.js');

const localPg = {
  host: 'localhost',
  database: keys.dbName,
  user: keys.dbUser,
  password: keys.dbPass
};
const dbConnection = keys.dbURL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/moviereviews.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg', //yarn add pg
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
