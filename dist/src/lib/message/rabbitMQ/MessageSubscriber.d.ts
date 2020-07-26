import { Message } from "amqplib";
export interface MessageSubscriber {
    queueName: string;
    addQueue(queueName: string): any;
    ackMessage(message: Message): any;
    consumeQueue(callback: any): any;
}
