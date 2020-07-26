"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleResponse = void 0;
var SimpleResponse = /** @class */ (function () {
    function SimpleResponse(reponseObject, status_code, res, headers) {
        this.reponseObject = reponseObject;
        this.status_code = status_code;
        this.res = res;
        this.headers = headers;
    }
    SimpleResponse.prototype.sendResponse = function () {
        this.res.status(this.status_code);
        if (this.headers) {
            this.res.set(this.headers);
        }
        return this.res.json(this.reponseObject);
    };
    return SimpleResponse;
}());
exports.SimpleResponse = SimpleResponse;
//# sourceMappingURL=SimpleResponse.js.map