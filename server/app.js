var express = require('express'); //thrid party, require by name
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index.js');
var calculate = require('./routes/calculate.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
app.use('/calculate', calculate); // always takes 2 parameters, the file route and the variable from the require statement
app.use('/', index); // less specific, so put after


app.set('port', process.env.PORT || 5000);




app.listen(app.get('port'), function() {
    console.log('Server now running at port ', app.get('port'));
});
