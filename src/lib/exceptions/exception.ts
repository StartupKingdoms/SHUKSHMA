import { RESPONSE_MESSAGE } from "../reponse/response_message/response_message";

/**
 * General exception of the application. 
 * The other exception should inherit it.
 * 
 * Can not be instantiated. 
 * To create an instance of type exception use the 
 * specific exception or implement one that inherits this.
 * 
 * @abstract
 * @extends {Error}
 */
export abstract class Exception extends Error {
    public description: string;
    public stackTrace: string;
    public abstract response_status_code :number ;
    public abstract response_message:RESPONSE_MESSAGE ;

    /**
     * Creates an instance of Exception.
     *
     * @param message Short message
     * @param description Detailed message
     */
    protected constructor(message: string , stackTrace:string,description: string) {
        super(message)
        this.description = description ;
        this.stackTrace = stackTrace ;
    }
}
