import { EXCEPTION_TYPES } from "./exception-types/index";
import { Exception } from "./exception";
import { Response } from 'express'
import { SaveException } from "./SaveException";
import { SimpleResponse } from "../reponse/SimpleResponse";
import { IResponse } from "../reponse/IResponse";
import {  UncaughtException } from "./exception-types/Uncaught.exception";

export class ExceptionManager{

    public ExceptionClass ;
    private simpleResponse:SimpleResponse ;

    private error:Exception; 
    private response:Response
    constructor(error:Exception,response:Response){
      this.error = error ;
      this.response = response ;
    }

    async  process():Promise<SimpleResponse>{
        let isExceptionPresent:boolean = this.isKnownException(this.error,EXCEPTION_TYPES) ;

        

        if(!isExceptionPresent){
            this.error = new UncaughtException(this.error);
        }
                
        await this.saveException(this.error.name,this.error.message,this.error.stackTrace);
        const finalResponse = await this.createResponse(this.error,this.response);
        this.simpleResponse = finalResponse ;
        return this.getResponse();
    }

    private isKnownException(error,knownExceptions):boolean{
        knownExceptions.forEach(ExceptionClass=>{
            if(error instanceof ExceptionClass){
               return true;
            }
        });

        return false ;
    }

    private async saveException(name,message,stackTrace){
        // IMPLEMENT DATABASE SAVING HERE
        await new SaveException(name,message,stackTrace);
    }

    private async createResponse(error:Exception,response:Response){
        const responseObject:IResponse  ={
            is_success:false,
            message:error.response_message,
            result:error
        }
        const generated_response =  await new SimpleResponse(responseObject,error.response_status_code,response);
        return generated_response;
    }

    getResponse():SimpleResponse{
        return this.simpleResponse ;
    }

}