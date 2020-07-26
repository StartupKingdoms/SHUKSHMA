import { Exception } from "./exception";
import { Response } from 'express';
import { SimpleResponse } from "../reponse/SimpleResponse";
export declare class ExceptionManager {
    ExceptionClass: any;
    private simpleResponse;
    private error;
    private response;
    constructor(error: Exception, response: Response);
    process(): Promise<SimpleResponse>;
    private isKnownException;
    private saveException;
    private createResponse;
    getResponse(): SimpleResponse;
}
