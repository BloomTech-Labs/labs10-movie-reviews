require('dotenv').config()

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/moviereviews.sqlite3'
    },
    useNullAsDefault: true,
    migrations: { directory: './data/migrations/development' },
    seeds: { directory: './data/seeds' }
  },

  production: {
    client: 'pg', 
    connection: process.env.DATABASE_URL + '?ssl=true',
    useNullAsDefault: true,
		pool: {
			min: 2,
			max: 10
		},
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/production'
    },
    seeds: { directory: './data/seeds' }
  }
};
