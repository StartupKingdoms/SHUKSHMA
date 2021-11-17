/// <reference types="node" />
import { BaseHttpController } from "inversify-express-utils";
import { STATUS_CODE } from "./status_code/http_reponse_status";
import { OutgoingHttpHeaders } from "http";
export declare class Response extends BaseHttpController {
    private responseContent;
    private responseHeaders;
    private status_code;
    constructor(status_code: STATUS_CODE, responseContent: object, headerContent?: OutgoingHttpHeaders);
    sendReponse(): import("inversify-express-utils/lib/results").JsonResult;
}
