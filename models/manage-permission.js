const mongoose = require('mongoose');

const perSchema = mongoose.Schema({
    permissionname: String,
    description: String
})

module.exports = mongoose.model('permission', perSchema);