var express = require('express'); //thrid party, require by name
var router = express.Router();
//body parser is not required here, though it is used, bc app.use(bodyParser) from app.js is parsing everything first, that's why it happens first in the app.js!

// url /calculate/add
router.post('/add', function(req, res) {
    var math = req.body; //look at AJAX POST to find what this means //body parser is working here //assigning it to a variable here makes it more meaningful
    console.log('from the client: ', math);

    var answer = math.inputX + math.inputY;
    console.log('answer: ', answer);


});

module.exports = router;
