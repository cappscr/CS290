var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3001);

app.get('/',function(req,res){
	var parameters = [];
	for (var p in req.query){
		parameters.push({'name':p,'value':req.query[p]})
	}
	var sentData = {};
	sentData.listOfParams = parameters;
	res.render('get',sentData);
});

app.post('/', function(req,res){
	var queryParameters = [];
	for (var q in req.query){
		queryParameters.push({'name':q, 'value':req.query[q]})
	}
	
	var bodyParameters = [];
	for (var p in req.body){
		bodyParameters.push({'name':p,'value':req.body[p]})
	}
	var sentData = {};
	sentData.queryParams = queryParameters;
	sentData.bodyParams = bodyParameters;
	res.render('post', sentData);
});

app.use(function(req,res){
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});