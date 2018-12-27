const express = require("express");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Theater } = require("../models/theater");

// => localhost:3000/theaters/
router.get('/', (req, res) => {
    Theater.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Theaters :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Theater.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Theater :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var theater = new Theater({
        theaterID : req.body.theaterID,
        name : req.body.name,
        contact_phone : req.body.contact_phone,
        image : req.body.image,
        number_room : req.body.number_room,
        number_seat : req.body.number_seat,
        disable : req.body.disable
    });
    theater.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Theater Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var theater = {
            theaterID : req.body.theaterID,
        name : req.body.name,
        contact_phone : req.body.contact_phone,
        image : req.body.image,
        number_room : req.body.number_room,
        number_seat : req.body.number_seat,
        disable : req.body.disable
        };
    Theater.findByIdAndUpdate(req.params.id, { $set: theater }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Theater Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Theater.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Theater Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;