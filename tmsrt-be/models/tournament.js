const mongoose = require('mongoose');
const tournamentSchema = mongoose.schema({
    name: String,
    location: String
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
