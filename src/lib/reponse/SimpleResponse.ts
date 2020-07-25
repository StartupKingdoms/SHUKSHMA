import { IResponse } from "./IResponse";
import { STATUS_CODE } from "./status_code/http_reponse_status";
import {Response} from 'express';
export class SimpleResponse {

    private reponseObject:IResponse;
    private status_code:STATUS_CODE;
    private res:Response ;
    private headers ;

    constructor(reponseObject:IResponse ,status_code:STATUS_CODE,res:Response,headers?:object){
        this.reponseObject = reponseObject ;
        this.status_code = status_code ;
        this.res = res ;
        this.headers = headers ;
    }

    sendResponse():Response{
        this.res.status(this.status_code);
        if(this.headers){this.res.set(this.headers);}
        return this.res.json(this.reponseObject);
    }
}