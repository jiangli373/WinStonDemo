/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-10-17
 * Time: 下午3:04
 * To change this template use File | Settings | File Templates.
 */
var log = require('../logger.js');
exports.example2 = function (req, res) {
    log.logger.log("info", "this is example2'log");
    res.send("This is example2");
}
