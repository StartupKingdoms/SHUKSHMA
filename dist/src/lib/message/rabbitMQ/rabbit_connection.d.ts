import { Connection, Channel, Message } from 'amqplib';
export declare class RabbitConnection {
    static channel: Channel;
    constructor(connection_url: string);
    createConnection(connection_url: string): Promise<Connection>;
    createDefaultChannel(connection: Connection): Promise<void>;
    static addQueue(queueName: string): Promise<boolean>;
    static sendToQueue(queueName: string, message: object): Promise<any>;
    static consumeQueue(queueName: string, callback: any): Promise<any>;
    static acknowledgeMessage(message: Message): Promise<boolean>;
}
