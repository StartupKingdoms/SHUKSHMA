import { STATUS_CODE } from "./status_code/http_reponse_status";
import { RESPONSE_MESSAGE } from "./response_message/response_message";
import { HttpContent } from "inversify-express-utils";

export interface IResponse{
     is_success:boolean;
     result:object; 
     message:RESPONSE_MESSAGE; 
}