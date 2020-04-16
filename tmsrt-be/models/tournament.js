const mongoose = require('mongoose');
const tournamentSchema = new mongoose.Schema({
    name: String,
    location: String,
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
    startsAt: {type: Date, default: Date.now },
    endsAt: {type: Date, default: Date.now }
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
