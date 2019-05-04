const mongoose = require('mongoose');

var quotesSchema = mongoose.Schema({
    message: String,
    author: String,
},{collection: 'quotes'});
module.exports = mongoose.model('Quotes', quotesSchema);
