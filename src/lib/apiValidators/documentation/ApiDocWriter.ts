import * as fs  from 'fs'
import * as path from 'path'
import { RESPONSE_MESSAGE } from '../../reponse/response_message/response_message'


export function Api_DocWriter(schema :any){
    
    const METHODS = {
        get:getWriter,
        post:postWriter,
        put:putWriter,
        delete:deleteWriter
    }

    fs.readFile(path.join(__dirname, './ApiDocumentation.json'), 'utf8',(err, response)=>{
        if (err) {
            console.log(err);
        }else{
            try {
                const data = JSON.parse(response);
               if(schema.meta.type) METHODS[schema.meta.type](data, schema);
            } catch (error) {
                console.log("try catch error here", error);
            }
        }
    })

}


// FUNCTION TO WRITE ON A JSON FILE 
function fileWriter(data: any,params:string) {

    return fs.writeFile(path.join(__dirname, './ApiDocumentation.json'),JSON.stringify(data, null, 4), (err)=>{
        if (err) {
            console.log(`FILE WRITER ERROR IN ${params}`, err);            
        }
    })

}

// FUNCTION TO WRITE RESPONSES
function responseWriter(data:any, REQUEST_PATH_NAME: string, REQUEST_CALL_METHOD : string) {

    // ARRAY FOR GETTING RESPONSE OF ALL OBJECTS
    const requestProperties = []
    const requestPropertieItem = Object.assign({}, data.definitions[`${REQUEST_PATH_NAME}_ENTITY_DEFINITION`].properties)
    requestPropertieItem[`_id`]={
        type : 'string',
        example : '60564fcb544047cdc3844818'
    }
    requestProperties.push(requestPropertieItem)
    // CHECKING IF THE NETHOD IS ABOOUT GETTING ALL OBJECTS THE RESPONSE WILL BE ARRAY
    if (REQUEST_CALL_METHOD === 'GET_ALL') {
        /**
         * Example : blog_GET_ALL_RESPONSE_200
         * @REQUEST_PATH_NAME == blog
         * @REQUEST_CALL_METHOD == GET_ALL
         */
        data.definitions[`${REQUEST_PATH_NAME}_${REQUEST_CALL_METHOD}_RESPONSE_200`]={   
            type : 'Array',
            properties : requestProperties
        }
    }else{
        // IF ITS NOT GET ALL RESPONSE WILL BE OBJECT
        data.definitions[`${REQUEST_PATH_NAME}_${REQUEST_CALL_METHOD}_RESPONSE_200`]={
            type : 'object',
            properties : Object.assign({}, data.definitions[`${REQUEST_PATH_NAME}_ENTITY_DEFINITION`].properties)
        }
        data.definitions[`${REQUEST_PATH_NAME}_${REQUEST_CALL_METHOD}_RESPONSE_200`].properties['_id']={
            type : 'string',
            example : '60564fcb544047cdc3844818'
        }
    }

    return data

}


// DEFINITION WRITER FUNCTION HERE
function definitionWriter(data:any,bodySchema: any, REQUEST_PATH_NAME: string, REQUEST_CALL_METHOD : string) {
    
    // CHECKING IF ENTITY DEF IS PRESENT AND THEN WRITING IT
    if (!data.definitions.hasOwnProperty(`${REQUEST_PATH_NAME}_ENTITY_DEFINITION`)) {
        data.definitions[`${REQUEST_PATH_NAME}_ENTITY_DEFINITION`]={
            type: "object",
            properties : {}
        }
        const DEFINITION_PROPERTIES = data.definitions[`${REQUEST_PATH_NAME}_ENTITY_DEFINITION`].properties
        bodySchema.map((element)=>{
            if (element.key !== 'id' ) {
                DEFINITION_PROPERTIES[`${element.key}`]={
                    type : element.type,
                    required : element.required,
                    example:element.example
                }
            }
        })
    }

    // writing DEFINITION HERE
    data.definitions[`${REQUEST_PATH_NAME}_${REQUEST_CALL_METHOD}_DEFINITION`]={
        type : "object",
        properties : {}
    }
    // const EXAMPLE_WRITING = data.
    const DEFINITION_PROPERTIES = data.definitions[`${REQUEST_PATH_NAME}_${REQUEST_CALL_METHOD}_DEFINITION`].properties
    // mapping over Body Schema to write data in Above Object 
    bodySchema.map((element)=>{
        DEFINITION_PROPERTIES[`${element.key}`]={
            type : element.type,
            required : element.required,
            example:element.example
        }
    })

    return data
}

// WRITING ALL RESPONSES OBJECT HERE
function responses(REQUEST_PATH_NAME:string,REQUEST_CALL_METHOD : String) {

    return {
        
        200: {
            description: `${RESPONSE_MESSAGE.SUCCESS} for ${REQUEST_CALL_METHOD}`,
            content: {
                "application/json": {
                    schema: {
                            "$ref": `#/definitions/${REQUEST_PATH_NAME}_${REQUEST_CALL_METHOD}_RESPONSE_200`
                    }
                }
            }
        },
        400: {
            description: RESPONSE_MESSAGE.BAD_REQUEST
        },
        401:{
            description: RESPONSE_MESSAGE.UNAUTHORIZED
        },
        403:{
            description: RESPONSE_MESSAGE.FORBIDDEN
        },
        405:{
            description: RESPONSE_MESSAGE.NOT_ALLOWED
        }
    }
}

// WRITING ALL THE PATHS HERE
function pathWriter(schema: any, data: any, REQUEST_PATH_METHOD:string ) {
    const requestMethod = schema.meta.type
    const requestPath = schema.meta.path
    const REQUEST_PATH_NAME = schema.meta.pathname

    // CHECKIGN IF GIVEN METHOD IS POST OR PUT AND THEN GIVING THEM REQUEST BODY
    if (requestMethod === 'post' || requestMethod === 'put') {
        if (!data.paths.hasOwnProperty(requestPath)) {
            data.paths[`${requestPath}`] = {}
        }
        data.paths[`${requestPath}`][`${requestMethod}`] = {
            summary : `${requestMethod} a single Entity of ${REQUEST_PATH_NAME}`,
            description : `${requestMethod} a single ${REQUEST_PATH_NAME}`,
            consumes: [
                "application/json"
            ],
            requestBody: {
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": `#/definitions/${REQUEST_PATH_NAME}_${REQUEST_PATH_METHOD}_DEFINITION`
                        }
                    }
                },
                "required": true
            },
            responses: responses(REQUEST_PATH_NAME, REQUEST_PATH_METHOD)
        }

    }
    // CHECKIGN IF GIVEN METHOD IS DELETE OR GET AND THEN GIVING THEM REQUEST PARAMETERS
    if(requestMethod === 'delete' || requestMethod === 'get'){
        const requestIdPath = schema.params && requestPath.substring(0, requestPath.indexOf('/:')) + `/{${schema.params[0].key}}`

        if (!data.paths.hasOwnProperty(requestPath)) {
            data.paths[`${requestIdPath}`] = {}
        }

        // THIS IS TO CHECK IF REQUEST IS TO GET ALL THE ITEMS
        schema.params ? data.paths[`${requestIdPath}`][`${requestMethod}`] = {
            summary : `${requestMethod} a single Entity of ${REQUEST_PATH_NAME}`,
            description : `${requestMethod} a single ${REQUEST_PATH_NAME}`,
            produces: [
                "application/json"
            ],
            parameters: [
                {
                  name: schema.params[0].key,
                  in: 'path',
                  description: 'Blog ID',
                  required: schema.params[0].required,
                  type: schema.params[0].type,
                  example:schema.params[0].example
                }
            ],
            responses: responses(REQUEST_PATH_NAME, REQUEST_PATH_METHOD)
        } : data.paths[`${requestPath}`][`${requestMethod}`] = {
            summary : `Get All ${REQUEST_PATH_NAME}s here`,
            description : `You will get All ${REQUEST_PATH_NAME}s here`,
            responses: responses(REQUEST_PATH_NAME, 'GET_ALL')
        }
    }
    return data
}


// TO WRITE GET REQUEST SWAGGER DOC ON ApiDocumentation.json THIS FILE 
function getWriter(data:any, schema: any) {   
    
    if (!schema.params) {   

        const responseWrittenData = responseWriter(data, schema.meta.pathname, 'GET_ALL')

        const pathWrittenData = pathWriter(schema, responseWrittenData, 'GET_ALL')
        
        fileWriter(pathWrittenData, 'getAlldWriter')       

    }

    if(schema.params){

        const responseWrittenData = responseWriter(data, schema.meta.pathname, 'GET_BY_ID')

        const pathWrittenData = pathWriter(schema, responseWrittenData, 'GET_BY_ID')

        fileWriter(pathWrittenData, 'getByIdWriter')

    }
}


// TO WRITE POST REQUEST SWAGGER DOC ON ApiDocumentation.json THIS FILE 
function postWriter(data:any, schema: any) {

    const definitionWrittenDta = definitionWriter(data, schema.body, schema.meta.pathname, 'POST')

    const responseWrittenData = responseWriter(definitionWrittenDta, schema.meta.pathname, 'POST')

    const pathWrittenData = pathWriter(schema, responseWrittenData, 'POST')

    fileWriter(pathWrittenData, 'postWriter')

}

// TO WRITE PUT REQUEST SWAGGER DOC ON ApiDocumentation.json THIS FILE 
function putWriter(data:any, schema: any) {

    const definitionWrittenDta = definitionWriter(data, schema.body, schema.meta.pathname, 'PUT')

    const responseWrittenData = responseWriter(definitionWrittenDta, schema.meta.pathname, 'PUT')

    const pathWrittenData = pathWriter(schema, responseWrittenData, 'PUT')

    fileWriter(pathWrittenData, 'putWriter')

}


// TO WRITE DELETE REQUEST SWAGGER DOC ON ApiDocumentation.json THIS FILE 
function deleteWriter(data:any, schema: any) {    

    const responseWrittenData = responseWriter(data, schema.meta.pathname, 'DELETE')

    const pathWrittenData = pathWriter(schema, responseWrittenData, 'DELETE')

    fileWriter(pathWrittenData, 'deleteWriter')

}