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


module.exports = router;
