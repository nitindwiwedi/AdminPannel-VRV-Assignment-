const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isloggedin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('userdata', userSchema);