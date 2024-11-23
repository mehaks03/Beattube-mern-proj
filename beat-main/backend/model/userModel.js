// userModel.mjs
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    resetToken: String,
    resetTokenExpiry: Date,
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;