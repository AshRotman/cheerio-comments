var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create a new UserSchema object
var UserSchema = new Schema({
   
    username: {
        type: String,
        trim: true,
        require: "String is Required"
    },

    password: {
        type: String,
        unique: true,
        requires: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    boolean: Boolean,
    array: Array,
    date: {
        type: Date,
        default: Date.now
    }
})