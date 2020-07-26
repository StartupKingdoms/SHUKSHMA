import { IResponse } from "./IResponse";
import { STATUS_CODE } from "./status_code/http_reponse_status";
import { Response } from 'express';
export declare class SimpleResponse {
    private reponseObject;
    private status_code;
    private res;
    private headers;
    constructor(reponseObject: IResponse, status_code: STATUS_CODE, res: Response, headers?: object);
    sendResponse(): Response;
}
