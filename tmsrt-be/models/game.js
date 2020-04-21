const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    roadTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament'},
    homeTeamGoals: Number, 
    roadTeamGoals: Number,
    startsAt: {type: Date },
    endsAt: {type: Date }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
