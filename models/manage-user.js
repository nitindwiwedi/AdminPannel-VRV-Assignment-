const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String,
})

module.exports = mongoose.model('user', userSchema);