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
exports.Response = void 0;
var inversify_express_utils_1 = require("inversify-express-utils");
var ResponseContent_1 = require("./ResponseContent");
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response(status_code, responseContent, headerContent) {
        var _this = _super.call(this) || this;
        var stringified_content = new ResponseContent_1.ResponseContent(responseContent);
        _this.responseContent = stringified_content;
        _this.responseHeaders = headerContent;
        _this.status_code = status_code;
        return _this;
    }
    Response.prototype.sendReponse = function () {
        var response = new inversify_express_utils_1.HttpResponseMessage();
        response.content = this.responseContent;
        response.headers = this.responseHeaders;
        response.statusCode = this.status_code;
        return this.json(response);
    };
    return Response;
}(inversify_express_utils_1.BaseHttpController));
exports.Response = Response;
//# sourceMappingURL=Response.js.map