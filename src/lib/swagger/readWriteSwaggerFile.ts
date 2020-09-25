import { existsSync, readFileSync, writeFileSync } from "fs";

export class SwaggerFileIO{
    private swaggerFilePath = __dirname + "/swagger.json";


    readSwaggerFile():JSON{
        if (existsSync(this.swaggerFilePath)) {
            const raw_swagger_data = readFileSync(this.swaggerFilePath);
            return JSON.parse(raw_swagger_data.toString());
        }
        return null ;
    }

    writeToSwaggerFile(newJson:JSON):boolean{
        try {
            writeFileSync(this.swaggerFilePath,JSON.stringify(newJson));
            return true ;
        } catch (error) {
            return false;
        }
    }

}