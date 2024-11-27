const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    rolename: String,
    permission: String,
})

module.exports = mongoose.model('role', roleSchema);