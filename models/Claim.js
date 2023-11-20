const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  claimNumber: {
    type: String,
    required: true
  },
  policyNumber: {
    type: String,
    required: true
  },
  dateOfIncident: {
    type: Date,
    required: true
  },
});

module.exports = mongoose.model('Claim', ClaimSchema);
