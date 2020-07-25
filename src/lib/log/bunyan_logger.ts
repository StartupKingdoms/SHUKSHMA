import {createLogger,stdSerializers} from 'bunyan' ;
import { Log } from "./log";
import { injectable } from "inversify";

@injectable()
export class BunyanLogger implements Log{

    private logger;

    constructor(){
        if(!this.logger){
            this.logger = createLogger({
                name:"user_service",
                serializers: stdSerializers
            })
        }
    }

   
        


    public LOG_ERROR(message: string) {
        this.logger.error(message);
    }

    public LOG_DEBUG(message: string) {
        this.logger.debug(message);
    }

    public LOG_INFO(message: string) {
        this.logger.info(message);
    }


    getLogInstance():Log {
        if (this.logger) {
            return this;
        }else{
            const logger = new BunyanLogger();
            return logger;
        }
    }
}