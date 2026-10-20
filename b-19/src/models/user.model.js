import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

//In Mongoose, the .pre() method is used to define pre-hooks (middleware functions) that execute before specific operations on documents or queries, such as save, validate, find, or update.
userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

// This creates a custom method called comparePassword on your Mongoose user model.
// You can call it on any user document retrieved from the database.
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};
//Your comparePassword() method lets you write user.comparePassword(password) instead of repeating the bcrypt comparison logic throughout your application. Because bcrypt.compare() is asynchronous, use await when calling this method if you need its Boolean result.

const userModel = mongoose.model('User', userSchema);

export default userModel;