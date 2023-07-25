const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    dateOfBirth:{
        required: true,
        type: Date
    },
    grade:{
        required: true,
        type: String
    },
    school:{
        required: true,
        type: String
    },
    gender:{
        required: false,
        type: String
    },
    zipCode:{
        required: true,
        type: Number
    },
    borough:{
        required: true,
        type: String
    },
    ethnicity:{
        required: true,
        type: [String]
    },
    language:{
        required: true,
        type: [String]
    },
    favSubject: {
        required: true,
        type: String
    },
    churchOrMosque: {
        required: true,
        type: Boolean
    },
    denomination: {
        required: false,
        type: String
    },
    mostImportantIssue: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('Data', userSchema)