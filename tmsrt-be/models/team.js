const mongoose = require('mongoose');
const teamSchema = mongoose.schema({
    name: String
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
