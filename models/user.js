var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
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