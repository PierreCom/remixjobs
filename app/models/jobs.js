var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JobSchema   = new Schema({
  Job_title: String,
  Company : String,
  Localization : String,
  Category : String,
  Description : String,
  Other_description : String,
  Contract : String,
  Dates : String,
  Tags : String


});

module.exports = mongoose.model('jobs', JobSchema);
