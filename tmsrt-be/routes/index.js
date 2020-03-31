var express = require('express');
var router = express.Router();

/* GET root */
router.get('/', function(req, res, next) {
    res.send("Hello tmsrt-be user! No content for now.");
});

router.get('/test', function(req, res, next) {
    res.send("How about this?");
});

module.exports = router;
