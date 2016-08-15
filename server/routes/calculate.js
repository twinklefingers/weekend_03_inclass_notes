var express = require('express'); //thrid party, require by name
var router = express.Router();
//body parser is not required here, though it is used, bc app.use(bodyParser) from app.js is parsing everything first, that's why it happens first in the app.js!

// url: /calculate/add
router.post('/add', function(req, res) {
    var math = req.body; //look at AJAX POST to find what this means //body parser is working here //assigning it to a variable here makes it more meaningful
    console.log('from the client: ', math);

    var answer = parseInt(math.inputX) + parseInt(math.inputY); //parseInt does not allow for decimals
    console.log('answer: ', answer);
    // res.json({answer: answer});
    // res.send(answer);
    res.send(answer.toString());
});

// url: /calculate/sub
router.post('/sub', function(req, res) {
    var math = req.body;
    var answer = parseInt(math.inputX) - parseInt(math.inputY);
    console.log('answer: ', answer);

    res.send(answer.toString());
});

// url: /calculate/div
router.post('/div', function(req, res) {
    var math = req.body;
    var answer = parseInt(math.inputX) / parseInt(math.inputY);
    console.log('answer: ', answer);
    res.send(answer.toString());
});

// url: /calculate/mul
router.post('/mul', function(req, res) {
    var math = req.body;
    var answer = parseInt(math.inputX) * parseInt(math.inputY);
    console.log('answer: ', answer);
    res.send(answer.toString());
});

module.exports = router;
