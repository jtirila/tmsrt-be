const Tournament = require('../models/tournament.js');
const Team = require('../models/team.js');
const Game = require('../models/game.js');

let handleError = (err, msg) => console.log(`Error: ${err}`);

let populate = async function() {
    // This is probably not the place for connecting to the database or defining the
    // models. Just trying things out for now.
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

    let pondhockey21 = null;
    await Tournament.create(
	{name: "Pond Hockey 2021",
         location: "Raksila",
	 startsAt: new Date(2021, 2, 21, 10, 00, 00),
	 endsAt: new Date(2021, 2, 21, 16, 00, 00)}, (err, pondhoc21) => {
	     if(err) return handleError(err, "pondhoc21");
	     pondhockey21 = pondhoc;

	 });

    await Tournament.create(
	{name: "Pond Hockey 2020",
         location: "Linnanmaa",
	 startsAt: new Date(2020, 3, 21, 11, 00, 00),
	 endsAt: new Date(2020, 3, 21, 17, 00, 00)}, (err, pondhoc21) => {
	     if(err) return handleError(err, "pondhoc20");
	     pondhockey21 = pondhoc;
	 });    
    let burritos = null;
    let burgers = null;
        await Team.create({name: "Burritos"}, (err, burr) => {
	if(err) return handleError(err, "burr");
	burritos = burr;
    });
    await Team.create({name: "Burgers"}, (err, burg) => {
	if(err) return handleError(err, "burg");
	burgers = burg;
    });
    let gameStartsAt = new Date(2020, 2, 20, 17, 00, 00);
    let gameEndsAt = new Date(2020, 2, 20, 17, 30, 00);
    await Game.create({homeTeam: burritos, roadTeam: burgers, startsAt: gameStartsAt, endsAt: gameEndsAt}, (err, game) => {
	if(err) handleError(err, "game");
    });
    return;
}

populate();
