import { Exception } from "../exception";
import { STATUS_CODE } from "../../reponse/status_code/http_reponse_status";
import { RESPONSE_MESSAGE } from "../../reponse/response_message/response_message";

export class RepositoryException extends Exception {
    public response_status_code: number = STATUS_CODE.INTERNAL_SERVER_ERROR;
    public response_message: RESPONSE_MESSAGE = RESPONSE_MESSAGE.REPOSITORY_ERROR;

    constructor(error:Error){
        super(error.name,error.stack,error.message);
    }


}