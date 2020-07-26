"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialException = void 0;
var exception_1 = require("../exception");
var http_reponse_status_1 = require("../../reponse/status_code/http_reponse_status");
var response_message_1 = require("../../reponse/response_message/response_message");
var InvalidCredentialException = /** @class */ (function (_super) {
    __extends(InvalidCredentialException, _super);
    function InvalidCredentialException(error) {
        var _this = _super.call(this, error.name, error.stack, error.message) || this;
        _this.response_status_code = http_reponse_status_1.STATUS_CODE.UNAUTHORIZED;
        _this.response_message = response_message_1.RESPONSE_MESSAGE.INCORRECT_CREDENTIALS;
        return _this;
    }
    return InvalidCredentialException;
}(exception_1.Exception));
exports.InvalidCredentialException = InvalidCredentialException;
//# sourceMappingURL=InvalidCredential.exception.js.map