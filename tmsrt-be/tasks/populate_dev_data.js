const Tournament = require('../models/tournament.js');
const Team = require('../models/team.js');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

let populate = async function() {
    let handleError = (err, msg) => {
	console.log(`Error: ${err}`);
    };

    // This is probably not the place for connecting to the database or defining the
    // models. Just trying things out for now.

    const pondhoc21 =  new Tournament(
	{name: "Pond Hockey 2021",
         location: "Raksila",
	 startsAt: new Date(2021, 2, 21, 10, 00, 00),
	 endsAt: new Date(2021, 2, 21, 16, 00, 00)});

    await pondhoc21.save(err => {
 	if(err) {
	    handleError(err, "pondhoc21");
	    return "error";
	}
    });

    const burritos = new Team({name: "Burritos"});
    await burritos.save(err => {
        if(err) return handleError(err, "burr");
	return "error";
    });
    const burgers = new Team({name: "Burgers"});
    await burgers.save(err => {
        if(err) {
	    handleError(err, "burg");
	    return "error";
	}
    });
    const pizzas = new Team({name: "Pizzas"});
    await pizzas.save(err => {
        if(err) {
	    handleError(err, "burg");
	    return "error";
	}
    });
    let gameStartsAt = new Date(2020, 2, 20, 17, 00, 00);
    let gameEndsAt = new Date(2020, 2, 20, 17, 30, 00);
    let game2StartsAt = new Date(2020, 2, 20, 17, 30, 00);
    let game2EndsAt = new Date(2020, 2, 20, 18, 00, 00);
    let game3StartsAt = new Date(2020, 2, 20, 18, 00, 00);
    let game3EndsAt = new Date(2020, 2, 20, 18, 30, 00);

    const pondhoc20 = new Tournament(
	{name: "Pond Hockey 2020",
         location: "Linnanmaa",
	 startsAt: new Date(2020, 3, 21, 11, 00, 00),
	 endsAt: new Date(2020, 3, 21, 17, 00, 00),
         games: [{ homeTeam: burritos._id, roadTeam: burgers._id,
                   startsAt: gameStartsAt, endsAt: gameEndsAt,
		   homeTeamGoals: null, roadTeamGoals: null },
		 { homeTeam: burritos._id, roadTeam: pizzas._id,
                   startsAt: game2StartsAt, endsAt: game2EndsAt,
		   homeTeamGoals: null, roadTeamGoals: null },
                 { homeTeam: burgers._id, roadTeam: pizzas._id,
                   startsAt: game3StartsAt, endsAt: game3EndsAt,
		   homeTeamGoals: null, roadTeamGoals: null }]
	});
    await pondhoc20.save(err => {
 	if(err) {
	    handleError(err, "pondhoc21");
	    return "error";
	}
    });

    return "done";
}

populate().then((res) => {
    console.log(`Got: ${res}`);
    /* Figure out a way to cleanly exit from this script.
       process.exit(0) or mongoose.disconnect /
       mongoose.connection.close() don't seem to work.  Currently need
       to Ctrl-C after a while, but this is probably unsafe and in any
       case ugly. */
});
