const mongoose = require('mongoose');

const LouageSchema = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "Please enter an id"]
    },
   
    route: {
        type: String,
        required: [true, "Please enter a route"]
    },
    // Add other properties related to Louage
}, {
    timestamps: true,
});

const Louage = mongoose.model('Louage', LouageSchema);
module.exports = Louage;
