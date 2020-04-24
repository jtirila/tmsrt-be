const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    roadTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    homeTeamGoals: Number,
    roadTeamGoals: Number,
    startsAt: {type: Date },
    endsAt: {type: Date }
});

const tournamentSchema = new mongoose.Schema({
    name: String,
    location: String,
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now },
    startsAt: {type: Date, default: Date.now },
    endsAt: {type: Date, default: Date.now },
    games: [gameSchema]
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
