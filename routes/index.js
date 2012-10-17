
/*
 * GET home page.
 */
var example1 = require('./example1')
    ,example2 = require('./example2')
    ,exceptions = require('./exception')
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.example1 = example1;
exports.example2 = example2;
exports.exceptions = exceptions;