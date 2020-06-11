/**
 * @author WMXPY
 * @namespace Mocha
 * @description Index
 */

const path = require('path');

module.exports = {
    extension: [
        "ts",
    ],
    require: path.join(__dirname, 'tshook.js'),
}
