/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path');

var expressWinston = require('express-winston');
var winston = require('winston');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
//    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});


app.use(expressWinston.logger({
    transports:[
        new (winston.transports.File)({
            filename:__dirname + '/logs/log.log',
            maxsize:1024,
            maxFiles:10
        })
    ]
}));

app.use(app.router);

// express-winston errorHandler makes sense AFTER the router.
app.use(expressWinston.errorLogger({
    transports:[
        new winston.transports.File({
            filename:__dirname + '/logs/exceptions.log',
            handleExceptions:true
        })
    ]
}));


app.configure('development', function () {
    app.use(express.errorHandler());

});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/example1', routes.example1.example1);
app.get('/example2', routes.example2.example2);
app.get('/exceptions', routes.exceptions.exceptionlog);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
