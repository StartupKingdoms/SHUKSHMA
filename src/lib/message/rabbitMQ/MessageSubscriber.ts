import {Message} from "amqplib";

export interface MessageSubscriber{
    queueName:string;
    addQueue(queueName:string);
    ackMessage(message:Message);
    consumeQueue(callback:any)
}