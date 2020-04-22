var express = require('express');
var router = express.Router();
const Tournament = require('../models/tournament');


/* GET tournaments listing. */
router.get('/', function(req, res, next) {
    // FIXME
    Tournament.find((err, docs) => {
	if(err) return console.error(err);
        res.json(docs);
    })

});


router.post('/', function(req, res, next) {
    const newTournament = req.body;
    // Beware, no error handling
    const tournament = new Tournament(newTournament);
    tournament.save().then(() => console.log('Tournament saved'));
    res.status(201).json("");
});

router.get('/:tournamentId', function(req, res, next) {
    Tournament.findById(req.params["tournamentId"], (err, tournament) => {
	if(err) res.status(404).json("");
	res.status(200).json(tournament);
    });
});

module.exports = router;
