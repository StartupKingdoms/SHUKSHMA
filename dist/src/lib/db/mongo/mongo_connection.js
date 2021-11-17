"use strict";
// Mostly from http://codingsans.com/blog/mongoose-models-using-typescript-classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
var mongoose = require("mongoose");
// import {connect} from 'mongoose';
var MongoConnection = /** @class */ (function () {
    function MongoConnection(url, config) {
        // this.url = 'mongodb://ds013559.mlab.com:13559/courseman-test';
        if (!MongoConnection.db) {
            this.createConnection(url, config);
        }
    }
    MongoConnection.prototype.createConnection = function (url, config) {
        mongoose.connect(url, config);
        MongoConnection.db = mongoose.connection;
        MongoConnection.db.on('error', function (error) {
            console.log('connection error for mongodb:', error.message);
        });
        MongoConnection.db.once('open', function () {
            console.log('Mongoose connection success');
        });
        MongoConnection.db.on('connected', function () {
            console.log("Mongoose default connection is open");
        });
        MongoConnection.db.on('disconnected', function () {
            console.log("Mongoose default connection is disconnected");
        });
        // process.on('SIGINT', function(){
        //     MongoConnection.db.close(function(){
        //         console.log("Mongoose default connection is disconnected due to application termination");
        //         process.exit(0)
        //     });
        // });
        return MongoConnection.db;
    };
    MongoConnection.prototype.closeConnection = function () {
        MongoConnection.db.close();
    };
    return MongoConnection;
}());
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=mongo_connection.js.map