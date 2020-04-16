var express = require('express');
var router = express.Router();
var Team = require('../models/team');

// This is probably not the place for connecting to the database or defining the
// models. Just trying things out for now.
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

/* GET tournaments listing. */
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
