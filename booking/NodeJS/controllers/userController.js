const express = require("express");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require("../models/user");

// => localhost:3000/users/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var user = new User({
        userID : req.body.userID,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender : req.body.gender,
        date_of_birth : req.body.date_of_birth,
        phone : req.body.phone,
        email : req.body.email,
        password : req.body.password,
        image:  req.body.image,
        role:  req.body.role,
        district :  req.body.district,
        city: req.body.city,
        disable :  req.body.disable,
        dateAdded : req.body.dateAdded
    });
    user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var user = {
            userID : req.body.userID,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            gender : req.body.gender,
            date_of_birth : req.body.date_of_birth,
            phone : req.body.phone,
            email : req.body.email,
            password : req.body.password,
            image:  req.body.image,
            role:  req.body.role,
            district :  req.body.district,
            city: req.body.city,
            disable :  req.body.disable,
            dateAdded : req.body.dateAdded
        };
    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;