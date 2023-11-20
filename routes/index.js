var express = require('express');
var router = express.Router();
const Claim = require('../models/CodingInsurance'); // Assuming CodingInsurance is now your Claim model

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page', heading: 'Welcome to Coding Insurance' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us', heading: 'About Coding Insurance' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', heading: 'Insurance Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us', heading: 'Contact Coding Insurance' });
});

// Example route for adding a new claim
router.post('/add-claim', async (req, res) => {
  try {
    const newClaim = new Claim({
      policyNumber: req.body.policyNumber,
      claimantName: req.body.claimantName,
      claimDetails: req.body.claimDetails,
      dateOfIncident: req.body.dateOfIncident,
      claimAmount: req.body.claimAmount,
      // status and filedDate will be set to default
    });

    await newClaim.save();
    res.redirect('/claims'); // Redirect to a page where claims are listed
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving the claim');
  }
});

module.exports = router;
