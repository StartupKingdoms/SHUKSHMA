import { SwaggerFileIO } from "./readWriteSwaggerFile";

export function ApiPath(options: {
    path: string,
    name: string,
    description: string,
    security ? : object
}) {
    return function (target: any) {
        const swagFileIO = new SwaggerFileIO();
        let swaggerDoc = swagFileIO.readSwaggerFile();
        if(swaggerDoc){
            const newSwaggerJSON = addTag(options,swaggerDoc);
            swagFileIO.writeToSwaggerFile(newSwaggerJSON);
        }
    }
}


function addTag(tagInfo,swaggerDoc):JSON{
    let tag = {
        name:tagInfo.name,
        description:tagInfo.description
    }
    if(checkIfTagExists(tagInfo.name,swaggerDoc.tags))swaggerDoc.tags.push(tag);
    // console.log("swagger Doc ",swaggerDoc);
    return swaggerDoc;
    
}


function checkIfTagExists(name:string,tagsArray:{name:string}[]):boolean{
    for (const tag of tagsArray) {
        if(tag.name == name ) return false ;
    }
    return true;
} 

