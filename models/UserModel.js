const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Schema for the Model
const UserSchema = new Schema({
    forename: String,
    surname: String,
    email: { type: String, required: true },
    password: {type: String, required: true},
    age: Number,
    team: String
});

// Export the Model
module.exports = mongoose.model('user', UserSchema);