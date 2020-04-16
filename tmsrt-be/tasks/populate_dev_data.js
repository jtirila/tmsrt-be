const Tournament = require('../models/tournament.js');
const Team = require('../models/team.js');

let handleError = err => console.log(`Error: ${err}`);

let populate = function() {
    // This is probably not the place for connecting to the database or defining the
    // models. Just trying things out for now.
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    
    Tournament.create([
	{
            name: "Pond Hockey 2021",
            location: "Raksila",
	    startsAt: new Date(2021, 2, 21, 10, 00, 00),
	    endsAt: new Date(2021, 2, 21, 16, 00, 00)
        },
	{
            name: "Pond Hockey 2020",
            location: "Linnanmaa",
            startsAt: new Date(2020, 2, 20, 11, 00, 00),
	    endsAt: new Date(2020, 2, 20, 17, 00, 00)
        },
    ], handleError);

    Team.create([
	{
            name: "Burritos"
            
        },
	{
            name: "Burgers",

        },
    ], handleError);
    
    return;
}

populate();
