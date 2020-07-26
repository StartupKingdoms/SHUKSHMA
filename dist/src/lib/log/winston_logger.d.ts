import { Log } from "./log";
export declare class WinstonLogger implements Log {
    private logger;
    constructor();
    LOG_ERROR(message: string): void;
    LOG_DEBUG(message: string): void;
    LOG_INFO(message: string): void;
    getLogInstance(): Log;
}
