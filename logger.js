/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-17
 * Time: 下午2:28
 * To change this template use File | Settings | File Templates.
 */

var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            filename: __dirname+'/logs/log.log',
            maxsize:1024,
            maxFiles:10
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: __dirname+'/logs/exceptions.log',
            handleExceptions: true
        })
    ],
    exitOnError: false
});
exports.logger = logger;
