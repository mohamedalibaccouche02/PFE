const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    face_count: {
        type: Number,
        required: [true, 'Face count is required']
    },
    time: {
        type: String
    },
    raspberryID: {
        type: String,
        required: [true, 'Raspberry ID is required']
    }
}, {
    timestamps: true,
});
const Passengers = mongoose.model('Passengers', UserSchema);
module.exports = Passengers;