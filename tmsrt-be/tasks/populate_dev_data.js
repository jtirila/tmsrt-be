const Tournament = require('../models/tournament.js');
const Team = require('../models/team.js');

handle_error = err => console.log(`Error: ${err}`);

module.exports = function(mongoose) {
    Tournament.create({
	name: "Pond Hockey 2021",
	location: "Raksila", handleError
    });

    Team.create({name: "OHK"}, handleError)
}
