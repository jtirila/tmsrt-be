var express = require('express');
var router = express.Router();

/* GET tournaments listing. */
router.get('/', function(req, res, next) {
  // FIXME  
    res.json([{name: "My Tournament", location: "Ice Rink"},
	      {name: "Jack's Tournament", location: "Pittbull Arena"}]);
});

module.exports = router;
