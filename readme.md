first we want to get everything up and running
we want to connect all our files
get a commit immediately!

do an "npm init"
"git init"

link up style links and scripts

link up jquery on clientapp

commit!

npm install express --save
npm install body-parser --save

basic app.js:
var express = require('express'); //thrid party, require by name
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('Server now running at port ', app.get('port'));
});

basic route.js:
var express = require('express');
var router = express.Router();

router.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFiles(path.join(__dirname, '../public', file));
});

module.exports = router;

basic clientapp.js
$(document).ready(function() {

    console.log('werkin');
    //event listener
    $('#calcForm').on('submit', function() {
        console.log('calculate');
        var math = {};
        var fields = $(this).serialzeArray();
        fields.forEach(function(field) {
            math[field.name] = field.value;
        });
    });

    console.log('given math obhect: ', math);
    $.ajax({
        type: "POST",
        url: '/calculate' + math.operation, //add //sub //multiply //divide //this is a dynamically created URL
        success: updateDom

    });

});

function updateDom(response) {
    console.log('server says: ', response);
}
