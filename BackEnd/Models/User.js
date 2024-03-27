const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please enter a username"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"]
    },
    email: {
        type: String,
        required: [true, "please enter an email"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "please enter a phone number"]
    },
    image: {
        type: String,
        required: false,
    },
    louages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Louage'
    }],
    chauffeurs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chauffeur'
    }]
}, {
    timestamps: true,
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
