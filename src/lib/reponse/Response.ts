import { IResponse } from "./IResponse";
import { BaseHttpController, HttpResponseMessage, HttpContent } from "inversify-express-utils";
import { STATUS_CODE } from "./status_code/http_reponse_status";
import { OutgoingHttpHeaders } from "http";
import { ResponseContent } from "./ResponseContent";
export class Response extends BaseHttpController  {
    
    private responseContent:HttpContent;
    private responseHeaders:OutgoingHttpHeaders;
    private status_code:STATUS_CODE;

    constructor(status_code:STATUS_CODE,responseContent:object,headerContent?:OutgoingHttpHeaders){
        super();
        
        const stringified_content = new ResponseContent(responseContent)
        this.responseContent = stringified_content ;
        this.responseHeaders =  headerContent;
        this.status_code = status_code;
    }

    public sendReponse(){
        const response = new HttpResponseMessage();
        response.content = this.responseContent;
        response.headers = this.responseHeaders;
        response.statusCode = this.status_code;
       return this.json(response);
    }


}