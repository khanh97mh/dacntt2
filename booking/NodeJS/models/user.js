const mongoose = require('mongoose');

var User = mongoose.model('User', {
    userID : {
        type: Number, required: true, unique: true
    },
    first_name : {
        type: String
    },
    last_name : {
        type: String
    },
    gender : {
        type: Boolean
    },
    date_of_birth : {
        type: Date
    },
    phone : {
        type: Number
    },
    email : {
        type: String, required: true, unique: true
    },
    password : {
        type: String
    },
    image: {
        type: String
    },
    role:  { 
        type: String, required: true, default: 'user'
    },
    district : {
        type: String
    },
    city: {
        type: String
    },
    disable : {
        type: Boolean, default: false
    },
	dateAdded : { 
        type: Date, default: Date.now 
    },

});

module.exports = { User };