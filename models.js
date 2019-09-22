
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/BeltExam');



var WhatSchema = new mongoose.Schema({
    name :{type :String, minlength:3, required: true ,unique: true},
    type :{type :String, minlength:3, required: true },
    description:{type: String, minlength:3, required:true},
    
    skill1:{type: String },
    skill2:{type: String },
    skill3:{type: String },
   
    
    like :{type :Number, default:0},
    // child :[ChildSchema],
},{timestamps: true });

mongoose.model('What', WhatSchema);
var What = mongoose.model('What')
var uniqueValidator = require('mongoose-unique-validator');

WhatSchema.plugin(uniqueValidator);

module.exports = What;
