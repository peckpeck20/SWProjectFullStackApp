/* Define database connection here */
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    database: "a1603181",
    user: "a1603181",
    password: "jiHI2i59z"
  }
});

// joses config const knex = require("knex")({   client: "mysql",   connection:
// {     host: "localhost",     database: "a1602411",     user: "a1602411",
// password: "puNAcD57j"   } });

module.exports = knex;
