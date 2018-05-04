const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db
    .select()
    .from("Comment")
    .then((data) => {
      console.log(data);
      res.status(200);
      res.send(data);
    });
});

router.post("/", (req, res) => {
  if (
    req.body.memberId &&
    req.body.ideaId &&
    req.body.commentTimeSleep &&
    req.body.commentLine
  ) {
    db
      .insert(req.body)
      .returning("*")
      .into("Comment")
      .then((data) => {
        console.log(data);
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        res.status(409);
        console.error(error);
        res.end(JSON.stringify({ error: "catastrophy" }));
      });
  } else {
    res.status(400);
    res.end(JSON.stringify({ error: "horror" }));
  }
});


router.post("/multiInsert/", (req, res) => {
  db
    .insert(req.body)
    .returning("*")
    .into("Comment")
    .then((data) => {
      console.log(data);
      res.status(200);
      res.send(data);
    })
    .catch((error) => {
      res.status(409);
      console.error(error);
      res.end(JSON.stringify({ error: "catastrophy" }));
    });
});

router.post("/delete/", (req, res) => {
  let row = "id";
  if (req.body.id) {
    db
      .del()
      .from("Comment")
      .where(row, req.body.id)
      .then((data) => {
        console.log(data);
        // res.send is apparently deprecated, use res.sendStatus
        res.sendStatus(200);
        res.sendStatus(data);
      })
      .catch((error) => {
        res.sendStatus(409);
        console.error(error);
        res.end(JSON.stringify({ error: "horror" }));
      });
  } else {
    res.sendStatus(400);
    res.end(JSON.stringify({ error: "horror" }));
  }
});

module.exports = router;
