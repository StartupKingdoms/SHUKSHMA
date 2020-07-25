import { Exception } from "../exception";
import { STATUS_CODE } from "../../reponse/status_code/http_reponse_status";
import { RESPONSE_MESSAGE } from "../../reponse/response_message/response_message";

export class BadRequestException extends Exception {
    public response_status_code: number = STATUS_CODE.BAD_REQUEST;
    public response_message: RESPONSE_MESSAGE = RESPONSE_MESSAGE.BAD_REQUEST;

    constructor(error:Error){
        super(error.name,error.stack,error.message);
    }


}