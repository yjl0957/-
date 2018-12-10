var mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
  name:{type:String, required:true, unique:true},
  year:{type:String},
  story:{type:String}
});

var Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
