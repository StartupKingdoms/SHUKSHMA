"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConnection = void 0;
var redis_1 = require("redis");
var RedisConnection = /** @class */ (function () {
    function RedisConnection(config) {
        if (!RedisConnection.cacheStore) {
            this.createConnection(config);
        }
    }
    RedisConnection.prototype.createConnection = function (config) {
        RedisConnection.cacheStore = (0, redis_1.createClient)(config);
        RedisConnection.cacheStore.on('error', function (error) {
            // console.log('connection error for redis:',error.message)
        });
        RedisConnection.cacheStore.once('ready', function () {
            // console.log( 'Redis connection open');
        });
        RedisConnection.cacheStore.on('connect', function () {
            // console.log("Redis default stream is connected to the server");
        });
        RedisConnection.cacheStore.on('disconnected', function () {
            // console.log("Redis default connection is disconnected");
        });
        return RedisConnection.cacheStore;
    };
    return RedisConnection;
}());
exports.RedisConnection = RedisConnection;
//# sourceMappingURL=redis_connection.js.map