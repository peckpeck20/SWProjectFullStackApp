/* As this is a project for a school assignment, comments may be a bit verbose as I make sure I remember what everything is doing after I've completed it. Sorry! */
// /index.js
const express = require('express');
const app = express();

// Do you understand why utilizing body parser here will make it usable
// in routes/api/people.js ?
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

const apiRoute = require("./api"); // means index.js in there!!!

app.use("/api", apiRoute);

// Just for fast testing if something breaks down, and
// wanna see at least that Node.js server is runnign
app.get("/", function(req, res) {
	res.send("Hello World of Knex Phase 2 - POST too!");
	console.log("Things seem to be working!");
});

app.listen("80");
