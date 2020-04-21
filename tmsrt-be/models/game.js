const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    homeTeam: { type: Schema.Types.ObjectId, ref: 'Team'}, 
    roadTeam: { type: Schema.Types.ObjectId, ref: 'Team'},
    homeTeamGoals: Number, 
    roadTeamGoals: Number,
    startsAt: {type: Date },
    endsAt: {type: Date }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Team;
