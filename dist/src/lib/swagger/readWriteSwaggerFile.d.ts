export declare class SwaggerFileIO {
    private swaggerFilePath;
    readSwaggerFile(): JSON;
    writeToSwaggerFile(newJson: JSON): boolean;
}
