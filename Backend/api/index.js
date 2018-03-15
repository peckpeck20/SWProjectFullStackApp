const express = require('express');
const router = express.Router();
const categoryRoute = require('./category');
/* Add /pets path to API */
//const petsRoute = require('./pets');

/* Same URL as in people.js */
router.use('/category', categoryRoute);
/* My code here */
//router.use('/pets', petsRoute);

module.exports = router;