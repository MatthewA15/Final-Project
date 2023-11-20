var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.find({});
    res.render('users', { users }); // Assuming you have a users.ejs view to display the list of users
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
});

module.exports = router;
