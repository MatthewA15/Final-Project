const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: true
  },
  claimantName: {
    type: String,
    required: true
  },
  claimDetails: {
    type: String,
    required: true
  },
  dateOfIncident: {
    type: Date,
    required: true
  },
  claimAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'Pending' 
  },
  filedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Claim', ClaimSchema);
