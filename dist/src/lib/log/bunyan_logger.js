"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BunyanLogger = void 0;
var bunyan_1 = require("bunyan");
var inversify_1 = require("inversify");
var BunyanLogger = /** @class */ (function () {
    function BunyanLogger() {
        if (!this.logger) {
            this.logger = (0, bunyan_1.createLogger)({
                name: "user_service",
                serializers: bunyan_1.stdSerializers
            });
        }
    }
    BunyanLogger_1 = BunyanLogger;
    BunyanLogger.prototype.LOG_ERROR = function (message) {
        this.logger.error(message);
    };
    BunyanLogger.prototype.LOG_DEBUG = function (message) {
        this.logger.debug(message);
    };
    BunyanLogger.prototype.LOG_INFO = function (message) {
        this.logger.info(message);
    };
    BunyanLogger.prototype.getLogInstance = function () {
        if (this.logger) {
            return this;
        }
        else {
            var logger = new BunyanLogger_1();
            return logger;
        }
    };
    var BunyanLogger_1;
    BunyanLogger = BunyanLogger_1 = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [])
    ], BunyanLogger);
    return BunyanLogger;
}());
exports.BunyanLogger = BunyanLogger;
//# sourceMappingURL=bunyan_logger.js.map