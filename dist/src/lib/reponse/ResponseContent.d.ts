import { HttpContent } from "inversify-express-utils";
export declare class ResponseContent extends HttpContent {
    private content;
    constructor(content: object);
    readAsStringAsync(): Promise<string>;
}
