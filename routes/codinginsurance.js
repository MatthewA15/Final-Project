var express = require('express');
var router = express.Router();
const CodingInsurance = require('../models/CodingInsurance');

// GET route for displaying Add Claim Page
router.get('/claims/add', (req, res) => {
  res.render('addClaim', { title: 'Add New Claim' });
});

// POST route for adding a new claim (Create operation)
router.post('/claims/add', async (req, res) => {
  try {
    // Creating a new Claim
    const newClaim = new CodingInsurance({
      policyNumber: req.body.policyNumber,
      claimDetails: req.body.claimDetails,
      dateOfIncident: req.body.dateOfIncident,
      // Add any other fields that are in your form
    });

    // Saving the new claim to the database
    await newClaim.save();
    // Redirect to the claims list
    res.redirect('/claims/view');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding the claim: ' + error.message);
  }
});

// GET route for viewing claims (Read operation)
router.get('/claims/view', async (req, res) => {
  try {
    // Fetching all claims from the database
    const claims = await CodingInsurance.find({});
    res.render('viewClaim', { title: 'View Claims', claims });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching claims: ' + error.message);
  }
});

// GET route for showing the edit claim form
router.get('/claims/edit/:id', async (req, res) => {
  try {
    const claim = await CodingInsurance.findById(req.params.id);
    res.render('editClaim', { claim, title: 'Edit Claim' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error finding the claim: ' + error.message);
  }
});

// POST route for updating a claim
router.post('/claims/edit/:id', async (req, res) => {
  try {
    await CodingInsurance.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/claims/view');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating the claim: ' + error.message);
  }
});

// POST route for deleting a claim
router.post('/claims/delete/:id', async (req, res) => {
  try {
    await CodingInsurance.findByIdAndDelete(req.params.id);
    res.redirect('/claims/view');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting the claim: ' + error.message);
  }
});

module.exports = router;
