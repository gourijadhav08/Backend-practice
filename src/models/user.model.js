const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,

    email: String,

    password: String,

});

module.exports = mongoose.model("User", userSchema);



//User

//↓

//Name

//Email

//Password

//↓

//MongoDB

//Ye database ka format batata hai.