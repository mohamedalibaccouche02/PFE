const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    face_count: {
        type:Number,
        required: [true]
    },
    time :{
        type:String
    }
}, {
    timestamps: true,
});


const Passengers = mongoose.model('Passengers', UserSchema);
module.exports = Passengers;