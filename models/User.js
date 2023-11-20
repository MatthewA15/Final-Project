const mongoose = require('mongoose');

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Indicates that the 'name' field is mandatory
  },
  email: {
    type: String,
    required: true, // Indicates that the 'email' field is mandatory
    unique: true, // Ensures that each email in the database is unique
  },
});

// Create the model from the schema and export it
module.exports = mongoose.model('User', UserSchema);
