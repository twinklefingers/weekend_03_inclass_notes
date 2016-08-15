var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res) {
    //send back static files
    console.log('file: ', req.params[0]);
    var file = req.params[0] || '/views/index.html';

    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
