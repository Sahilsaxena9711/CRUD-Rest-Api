var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email : {
        type: String,
        required : [true, "Email is required"]
    },
    name : {
        type : String,
        required : [true, "Name is required"]
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    }
})


var User = mongoose.model('user',UserSchema);

module.exports = User;

