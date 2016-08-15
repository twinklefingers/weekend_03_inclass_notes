var express = require('express'); //thrid party, require by name
var app = express();
var bodyParser = require('body-parser');

var index = ('../routes/index.js'); //something is wrong here?

app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
app.use('/', index); //something is wrong here?


app.set('port', process.env.PORT || 5000);




app.listen(app.get('port'), function() {
    console.log('Server now running at port ', app.get('port'));
});
