import { Exception } from "../exception";
import { RESPONSE_MESSAGE } from "../../reponse/response_message/response_message";
export declare class InvalidCredentialException extends Exception {
    response_status_code: number;
    response_message: RESPONSE_MESSAGE;
    constructor(error: Error);
}
