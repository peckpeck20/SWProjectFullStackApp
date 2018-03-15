/* Define database connection here */
const knex = require('knex')({
    client:'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'a1603181',
      user: 'a1603181',
      password: 'jiHI2i59z'
    }
});

module.exports = knex;
