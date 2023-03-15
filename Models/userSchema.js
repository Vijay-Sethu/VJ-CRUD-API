const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    age: Number,
    dob: Number,
    city: String
}, { versionKey: false }) // This is remove -v in object

module.exports = mongoose.model('Users', schema);