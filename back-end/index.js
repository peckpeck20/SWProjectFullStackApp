/* As this is a project for a school assignment, comments may be a bit verbose as I make sure I remember what everything is doing after I've completed it. Sorry! */
const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const apiRoute = require("./api"); // means index.js in there!!!

app.use("/api", apiRoute);

app.get("/", (req, res) => {
  res.send("Hello World! this is a simple test!");
  console.log("Things seem to be working!");
});

app.listen(8000, function () {
  console.log('back-end running in port 8000!');
});