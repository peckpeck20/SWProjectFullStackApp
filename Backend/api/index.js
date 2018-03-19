const express = require('express');
const router = express.Router();
const categoryRoute = require('./category');
const memberRoute = require('./member');
const commentRoute = require('./comment');
const memberIdeaRoute = require('./memberidea');
const ideaRoute = require('./idea');
/* Add /pets path to API */
//const petsRoute = require('./pets');

/* Same URL as in people.js */
router.use('/category', categoryRoute);
router.use('/member', memberRoute);
router.use('/comment', commentRoute)
router.use('/memberidea', memberIdeaRoute);
router.use('/idea', ideaRoute);
/* My code here */
//router.use('/pets', petsRoute);

module.exports = router;