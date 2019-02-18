const keys = require('./config/keys.js');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/moviereviews.sqlite3'
    },
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' }
  },

  production: {
    client: 'pg', //yarn add pg
    connection: keys.dbURL,
    ssl: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  }
};
