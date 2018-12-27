const mongoose = require('mongoose');

var Movie = mongoose.model('Movie', {
    movieID : {
        type: Number, required: true, unique: true    
    },
    name : {
        type: String
    },
    image : {
        type: String
    },
    director : [
        {director_name : {type: String}}
    ],
    cast : [
        {cast_name : {type: String}}
    ],
    genre : [
        {genre_name : {type: String}}
    ],
    release_date : {
        type: Date
    },
    running_time : {
        type: Number
    },
    language : {
        type: String
    },
    content : {
        type: String
    },
    link : {
        type: String
    },
    disable : {
        type: Boolean, default: false
    }
});

module.exports = {Movie};