export interface Log {
    LOG_ERROR(message: string): any;
    LOG_DEBUG(message: string): any;
    LOG_INFO(message: string): any;
    getLogInstance(): Log;
}
