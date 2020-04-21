const Tournament = require('../models/tournament.js');
const Team = require('../models/team.js');
const Game = require('../models/game.js');

let handleError = (err, msg) => console.log(`Error: ${err}`);

let populate = async function() {
    // This is probably not the place for connecting to the database or defining the
    // models. Just trying things out for now.
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

    const pondhoc21 =  new Tournament(
	{name: "Pond Hockey 2021",
         location: "Raksila",
	 startsAt: new Date(2021, 2, 21, 10, 00, 00),
	 endsAt: new Date(2021, 2, 21, 16, 00, 00)});

    await pondhoc21.save(err => {
	     if(err) return handleError(err, "pondhoc21");
    });

    const pondhoc20 = new Tournament(
	{name: "Pond Hockey 2020",
         location: "Linnanmaa",
	 startsAt: new Date(2020, 3, 21, 11, 00, 00),
	 endsAt: new Date(2020, 3, 21, 17, 00, 00)});
    await pondhoc20.save(err => {
        if(err) return handleError(err, "pondhoc20");
    });    

    const burritos = new Team({name: "Burritos"});
    await burritos.save(err => {
        if(err) return handleError(err, "burr");
    });
    const burgers = new Team({name: "Burgers"});
    await burgers.save(err => {
        if(err) return handleError(err, "burg");
    });
    let gameStartsAt = new Date(2020, 2, 20, 17, 00, 00);
    let gameEndsAt = new Date(2020, 2, 20, 17, 30, 00);
    console.log(`burritos id: ${burritos._id}`);
    await Game.create({tournament: pondhoc20._id, homeTeam: burritos._id, roadTeam: burgers._id, startsAt: gameStartsAt, endsAt: gameEndsAt}, (err, game) => {
	if(err) handleError(err, "game");
    });
    // TODO: figure out how to properly exit the script, see e.g. https://stackoverflow.com/questions/52461119/javascript-exit-script-after-async-function
    // process.exit(0); // This doesn't work
}

populate();
