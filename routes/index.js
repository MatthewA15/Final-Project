var express = require('express');
var router = express.Router();
const Claim = require('../models/CodingInsurance'); // Assuming CodingInsurance is now your Claim model

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});


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
