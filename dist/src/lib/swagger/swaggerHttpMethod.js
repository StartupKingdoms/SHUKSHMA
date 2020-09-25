"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerHttpMethod = void 0;
var readWriteSwaggerFile_1 = require("./readWriteSwaggerFile");
function SwaggerHttpMethod(options) {
    return function (target, propertyKey, descriptor) {
        console.log("Swagger Execution http method**************");
        addControllermethod(options);
    };
}
exports.SwaggerHttpMethod = SwaggerHttpMethod;
function addControllermethod(pathOptions) {
    var swagger_schema = {
        "tags": [],
        "summary": "",
        "description": "",
        "produces": ["application/xml", "application/json"],
        "parameters": [{
                "in": "body",
                "name": "body",
                "description": "",
                "required": false,
                "schema": ""
            }],
        "responses": {
            "default": {
                "description": "successful operation"
            }
        }
    };
    var jsonDoc = {};
    Object.defineProperty(jsonDoc, pathOptions.method, {
        value: swagger_schema,
        writable: true,
        enumerable: true
    });
    jsonDoc[pathOptions.method].tags = [pathOptions.tag];
    jsonDoc[pathOptions.method].summary = pathOptions.summary;
    jsonDoc[pathOptions.method].description = pathOptions.description;
    jsonDoc[pathOptions.method].parameters = pathOptions.parameters;
    console.log("swagger options ", JSON.stringify(jsonDoc));
    var swagIO = new readWriteSwaggerFile_1.SwaggerFileIO();
    var swaggerDoc = swagIO.readSwaggerFile();
    if (swaggerDoc) {
        // const pathNotCreated = checkIfPathExists(pathOptions.path, swaggerDoc["paths"])
        // if(!pathNotCreated) return null ;
        swaggerDoc["paths"][pathOptions.path] = jsonDoc;
        swagIO.writeToSwaggerFile(swaggerDoc);
        // console.log("swaggerDoc in httpMethod ",swaggerDoc);
    }
}
// function checkIfPathExists(path,pathsArray){
//     for (const apiPath of Object.keys(pathsArray)) {
//         if (apiPath == path) {
//             return false ;
//         }
//         return true;
//     }
// }
//# sourceMappingURL=swaggerHttpMethod.js.map