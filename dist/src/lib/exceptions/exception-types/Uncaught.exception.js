"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UncaughtException = void 0;
var exception_1 = require("../exception");
var http_reponse_status_1 = require("../../reponse/status_code/http_reponse_status");
var response_message_1 = require("../../reponse/response_message/response_message");
var UncaughtException = /** @class */ (function (_super) {
    __extends(UncaughtException, _super);
    function UncaughtException(error) {
        var _this = _super.call(this, error.name, error.stack, error.message) || this;
        _this.response_status_code = http_reponse_status_1.STATUS_CODE.INTERNAL_SERVER_ERROR;
        _this.response_message = response_message_1.RESPONSE_MESSAGE.UNCAUGHT_ERROR;
        return _this;
    }
    return UncaughtException;
}(exception_1.Exception));
exports.UncaughtException = UncaughtException;
//# sourceMappingURL=Uncaught.exception.js.map