import {MethodTypes} from './swagger_http_types';
import { SwaggerFileIO } from './readWriteSwaggerFile';

interface PathOptions{
    path:string,
    method:MethodTypes,
    tag:string,
    summary:string,
    description:string,
    parameters:[{
        in:String,
        required:boolean,
        schema:{
            type:"object",
            properties :object
        }

    }],
    responses:object
}
export function SwaggerHttpMethod(options:PathOptions){
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("Swagger Execution http method**************",);
        
        addControllermethod(options);
    }
}

function addControllermethod(pathOptions:PathOptions){
     const swagger_schema =    {
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
        
    }

    let jsonDoc = {};
    Object.defineProperty(jsonDoc,pathOptions.method,{
        value:swagger_schema,
        writable:true,
        enumerable:true
    })

    jsonDoc[pathOptions.method].tags = [pathOptions.tag] ;
    jsonDoc[pathOptions.method].summary = pathOptions.summary ;
    jsonDoc[pathOptions.method].description = pathOptions.description ;
    jsonDoc[pathOptions.method].parameters = pathOptions.parameters ;
    console.log("swagger options ",JSON.stringify(jsonDoc));
    

    const swagIO = new SwaggerFileIO();
    let swaggerDoc = swagIO.readSwaggerFile();
    if(swaggerDoc){
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