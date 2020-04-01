var express = require('express');
var router = express.Router();

// This is probably not the place for connecting to the database or defining the
// models. Just trying things out for now.
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const tournamentSchema = new mongoose.Schema({name: String, location: String});
const Tournament = mongoose.model('Tournament', tournamentSchema);


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
