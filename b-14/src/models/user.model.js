const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    username:String,
    age:Number
});

userSchema.index({email:1}); // This will create an index on the email field, which will make the query faster when searching for a user by email. The 1 indicates that the index should be created in ascending order. You can also use -1 for descending order.

userSchema.index({ username: 1, age: -1 }); // This will create a compound index on the username and age fields, which will make the query faster when searching for a user by username and age. The 1 indicates that the index should be created in ascending order for username, and -1 indicates that the index should be created in descending order for age.

// userSchema.index({ email: 1 }, { unique: true });// This will create a unique index on the email field, which will ensure that no two users can have the same email address. If you try to create a user with an email that already exists in the database, it will throw an error.

const userModel = mongoose.model("user",userSchema);

module.exports = userModel