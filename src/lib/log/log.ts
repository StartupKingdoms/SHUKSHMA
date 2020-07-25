export interface Log {
      LOG_ERROR(message:string);
      LOG_DEBUG(message:string);
      LOG_INFO(message:string);
      getLogInstance():Log;
// Later just create a builder for log so that user can choose between various loggers such as winston, bunyan etc.
}