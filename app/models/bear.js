var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    "0": String,
    "1": String,
    "2" : String,
    "3" : String,
    "4" : String,
    "5" : String,
    "6" : String,
    "7" : String,
    "8" : String

});

module.exports = mongoose.model('names', BearSchema);