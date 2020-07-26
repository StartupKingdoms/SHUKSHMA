export interface MessagePublisher {
    queueName: string;
    addQueue(queueName: string, callback: any): any;
    sendMessage(queueName: string, message: object): any;
}
