const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { products } = require('../model/product');

// => localhost:3000/product/
router.get('/', (req, res) => {
    products.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving products :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    products.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var prod= new products({
        productname: req.body.productname,
        price:req.body.price
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in products Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var prod= {
        productname: req.body.productname,
        price:req.body.price
    };
    prod.findByIdAndUpdate(req.params.id, { $set: product }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    products.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product deletion :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;