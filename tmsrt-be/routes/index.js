var express = require('express');
var router = express.Router();

/* GET root */
router.get('/', function(req, res, next) {
    res.send("Hello tmsrt-be user! No content for now.");
});

module.exports = router;
