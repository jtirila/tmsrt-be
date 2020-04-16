const Tournament = require('../models/tournament.js');
const Team = require('../models/team.js');



handle_error = err => console.log(`Error: ${err}`);

let populate = function() {
    // This is probably not the place for connecting to the database or defining the
    // models. Just trying things out for now.
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    
    Tournament.create({
	name: "Pond Hockey 2021",
	location: "Raksila", handleError
    });

    Team.create({name: "Burritos"}, handleError)
}

populate();
