"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPath = void 0;
var readWriteSwaggerFile_1 = require("./readWriteSwaggerFile");
function ApiPath(options) {
    return function (target) {
        var swagFileIO = new readWriteSwaggerFile_1.SwaggerFileIO();
        var swaggerDoc = swagFileIO.readSwaggerFile();
        if (swaggerDoc) {
            var newSwaggerJSON = addTag(options, swaggerDoc);
            swagFileIO.writeToSwaggerFile(newSwaggerJSON);
        }
    };
}
exports.ApiPath = ApiPath;
function addTag(tagInfo, swaggerDoc) {
    var tag = {
        name: tagInfo.name,
        description: tagInfo.description
    };
    if (checkIfTagExists(tagInfo.name, swaggerDoc.tags))
        swaggerDoc.tags.push(tag);
    // console.log("swagger Doc ",swaggerDoc);
    return swaggerDoc;
}
function checkIfTagExists(name, tagsArray) {
    for (var _i = 0, tagsArray_1 = tagsArray; _i < tagsArray_1.length; _i++) {
        var tag = tagsArray_1[_i];
        if (tag.name == name)
            return false;
    }
    return true;
}
//# sourceMappingURL=apiPath.js.map