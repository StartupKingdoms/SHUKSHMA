import {createLogger,format,transports} from "winston";
import { Log } from "./log";
import { injectable } from "inversify";

@injectable()
export class WinstonLogger implements Log{

    private logger;

    constructor(){
        if(!this.logger){
            this.logger = createLogger({
                format: format.combine(
                    format.colorize(),
                    format.timestamp(),
                    format.prettyPrint()
                ),
                defaultMeta: { service: 'user-service' },
                transports: [
                 new transports.Console()
                //   new winston.transports.File({
                //     filename: 'combined.log',
                //     level:'info'
                //   })
                ],
                silent:false
              });
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


    public getLogInstance():Log {
        if (this.logger) {
            return this;
        }else{
            const logger = new WinstonLogger();
            return logger;
        }
    }
}