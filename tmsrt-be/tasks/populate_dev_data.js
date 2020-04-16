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
            location: "Raksila"
        },
	{
            name: "Pond Hockey 2020",
            location: "Linnanmaa"    
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
    
    return res;
}

populate();
