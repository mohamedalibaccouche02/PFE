const mongoose = require('mongoose');

const ChauffeurSchema = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "Please enter a name"]
    },
    motpasse: {
        type: String,
        required: [true, "Please enter a password"]
    },
    salaire: {
        type: String,
        required: [true, "Please enter a salary"]
    },
    startWork: {
        type: String,
        required: [true, "Please enter start work time"]
    },
    endWork: {
        type: String,
        required: [true, "Please enter end work time"]
    },
    color: {
        type: String,
        required: [true, "Please enter a color"]
    }
    // Add other properties related to Chauffeur
}, {
    timestamps: true,
});

const Chauffeur = mongoose.model('Chauffeur', ChauffeurSchema);
module.exports = Chauffeur;
