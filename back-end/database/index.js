/* Define database connection here */
const knex = require("knex")({
	client: "mysql",
	connection: {
		host: "localhost",
		database: "a1603191",
		user: "a1603191",
		password: "jeHU8E98n"
	}
});

module.exports = knex;
