export interface MessagePublisher{
    queueName:string;
    addQueue(queueName:string,callback:any);
    sendMessage(queueName:string,message:object);
}