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
    raspberryID :{
        type: String,
        required: [true, "Please enter an id"]
    },
    passengers: [{
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: 'Passengers'
    }]
}, 


{
    timestamps: true,
});

const Louage = mongoose.model('Louage', LouageSchema);
module.exports = Louage;
