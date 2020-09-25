"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerFileIO = void 0;
var fs_1 = require("fs");
var SwaggerFileIO = /** @class */ (function () {
    function SwaggerFileIO() {
        this.swaggerFilePath = __dirname + "/swagger.json";
    }
    SwaggerFileIO.prototype.readSwaggerFile = function () {
        if (fs_1.existsSync(this.swaggerFilePath)) {
            var raw_swagger_data = fs_1.readFileSync(this.swaggerFilePath);
            return JSON.parse(raw_swagger_data.toString());
        }
        return null;
    };
    SwaggerFileIO.prototype.writeToSwaggerFile = function (newJson) {
        try {
            fs_1.writeFileSync(this.swaggerFilePath, JSON.stringify(newJson));
            return true;
        }
        catch (error) {
            return false;
        }
    };
    return SwaggerFileIO;
}());
exports.SwaggerFileIO = SwaggerFileIO;
//# sourceMappingURL=readWriteSwaggerFile.js.map