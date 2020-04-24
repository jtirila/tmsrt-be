var express = require('express');
var router = express.Router();
var Team = require('../models/team');

/* GET teams listing. */
router.get('/', function(req, res, next) {
    // FIXME
    Team.find((err, docs) => {
	if(err) return console.error(err);
        res.json(docs);
    })

});


router.post('/', function(req, res, next) {
    const newTeam = req.body;
    // Beware, no error handling
    const team = new Team(newTeam);
    team.save().then(() => console.log('Team saved'));
    res.status(201).json("");
});


module.exports = router;
