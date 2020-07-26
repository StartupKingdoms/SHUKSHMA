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
exports.WinstonLogger = void 0;
var winston_1 = require("winston");
var inversify_1 = require("inversify");
var WinstonLogger = /** @class */ (function () {
    function WinstonLogger() {
        if (!this.logger) {
            this.logger = winston_1.createLogger({
                format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.prettyPrint()),
                defaultMeta: { service: 'user-service' },
                transports: [
                    new winston_1.transports.Console()
                    //   new winston.transports.File({
                    //     filename: 'combined.log',
                    //     level:'info'
                    //   })
                ],
                silent: false
            });
        }
    }
    WinstonLogger_1 = WinstonLogger;
    WinstonLogger.prototype.LOG_ERROR = function (message) {
        this.logger.error(message);
    };
    WinstonLogger.prototype.LOG_DEBUG = function (message) {
        this.logger.debug(message);
    };
    WinstonLogger.prototype.LOG_INFO = function (message) {
        this.logger.info(message);
    };
    WinstonLogger.prototype.getLogInstance = function () {
        if (this.logger) {
            return this;
        }
        else {
            var logger = new WinstonLogger_1();
            return logger;
        }
    };
    var WinstonLogger_1;
    WinstonLogger = WinstonLogger_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], WinstonLogger);
    return WinstonLogger;
}());
exports.WinstonLogger = WinstonLogger;
//# sourceMappingURL=winston_logger.js.map