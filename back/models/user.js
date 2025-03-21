const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    phonenumber: {
        type: Number,
        required: true,
    },

    address: {
        type: String,
        required: true,
    }

}
);

const User = mongoose.model('User', userSchema);

module.exports = User;    