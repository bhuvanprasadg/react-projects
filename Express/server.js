const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const api = require('./src/routes/api');
const newApi = require('./src/routes/newApi');
const port = 3030;

const app = express();

app.use(session({ 
    secret: 'bookreactionsexpress', 
    saveUninitialized: true,
    resave: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.disable('etag');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
    next();
})

process.on('uncaughtException', function (err) {
    if (err) console.log(err, err.stack);
});


// JSON API
var baseUrl = '/api/todos/';

app.get(baseUrl, api.getTodos);
app.post(baseUrl, api.addTodos);

app.post(baseUrl + ":id/toggle", api.toggleTodos);


// Start
app.listen(port, function () {
    console.log("Todo Reactions Express server listening..");
});
