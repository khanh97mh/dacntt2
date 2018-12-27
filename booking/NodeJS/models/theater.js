const mongoose = require('mongoose');

var Theater = mongoose.model('Theater', {
    theaterID : {
        type: Number, required: true, unique: true
    },
    name : {
        type: String
    },
    contact_phone : {
        type: Number
    },
    image : {
        type: String
    },
    number_room : {
        type: Number
    },
    number_seat : {
        type: Number
    },
    disable : {
        type: Boolean, default: false
    }
});

module.exports = { Theater };