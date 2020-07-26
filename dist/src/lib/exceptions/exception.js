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
exports.Exception = void 0;
/**
 * General exception of the application.
 * The other exception should inherit it.
 *
 * Can not be instantiated.
 * To create an instance of type exception use the
 * specific exception or implement one that inherits this.
 *
 * @abstract
 * @extends {Error}
 */
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    /**
     * Creates an instance of Exception.
     *
     * @param message Short message
     * @param description Detailed message
     */
    function Exception(message, stackTrace, description) {
        var _this = _super.call(this, message) || this;
        _this.description = description;
        _this.stackTrace = stackTrace;
        return _this;
    }
    return Exception;
}(Error));
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map