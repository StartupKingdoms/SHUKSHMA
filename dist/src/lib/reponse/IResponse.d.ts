import { RESPONSE_MESSAGE } from "./response_message/response_message";
export interface IResponse {
    is_success: boolean;
    result: object;
    message: RESPONSE_MESSAGE;
}
