const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Signup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the user schema
const Signup = mongoose.Schema;
const Schema = new Signup({
    Username: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    resetToken: { type: String }, // Token for password reset
    resetTokenExpiry: { type: Date }, // Expiry time for the reset token
});

// Create the model
var Model = mongoose.model('User_data', Schema);

module.exports = Model;
