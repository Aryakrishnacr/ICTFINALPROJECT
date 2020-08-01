const mongoose = require('mongoose');

var products= mongoose.model('product', {
    productname: { type: String },
    price: { type: Number}
    
});

module.exports = { products };