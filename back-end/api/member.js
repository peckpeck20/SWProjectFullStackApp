// /routes/api/people.js

const express = require("express");
const router = express.Router();
const db = require("../database");
// Notice: No need to require body-parser here! (This is JavaScript, not
// Java, nor React)

/** proto377.haaga-helia.fi:80/api/people , with GET**/
router.get("/", function(req, res) {
    db
        .select()
        .from("Member")
        .then((data) => {
            console.log(data);
            res.status(200);
            res.send(data);
        });
});

router.post("/", function(req, res) {
    // TODO: fix sql tables as newer entries not implementing foreign key constraints
    if (req.body.id && req.body.userName && req.body.email) {
        // Front-end has to send a response as JSON
        db
            .insert(req.body)
            .returning("*")
            .into("Member")
            .then((data) => {
                console.log(data);
                res.status(200);
                res.send(data);
            })
            .catch((error) => {
                res.status(409); // Just a start of err handling for model for you
                console.error(error);
                res.end(JSON.stringify({ error: "catastrophy" }));
            });
    } else {
        res.status(400); // Just a start of err handling for model for yo
        res.end(JSON.stringify({ error: "horror" }));
    }
});

//proto377.haaga-helia.fi:80/api/people/multiInsert , with MULTI-JSON POST !!!
router.post("/multiInsert/", function(req, res) {
    // Just a start of err handling for model for you

    // Front end has to send array of objects!
    db
        .insert(req.body)
        .returning("*")
        .into("Member")
        .then((data) => {
            console.log(data);
            res.status(200);
            res.send(data); // [17] if that was the auto_incement id
            // or [17,18,19] if multiple inserts were done. valid json.org
        })
        .catch((error) => {
            res.status(409); // Just a start of err handling for model for you
            console.error(error);
            res.end(JSON.stringify({ error: "catastrophy" }));
        });
});

router.post("/delete/", function(req, res) {
    let row = "userName";
    if (req.body.userName) {
        db
            .del()
            .from("Member")
            .where(row, req.body.userName)
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
