import { Connection, Channel, Message } from 'amqplib';
export declare class RabbitConnection {
    static channel: Channel;
    private logger;
    constructor();
    createConnection(): Promise<Connection>;
    createDefaultChannel(connection: Connection): Promise<void>;
    static addQueue(queueName: string): Promise<void>;
    static sendToQueue(queueName: string, message: object): Promise<void>;
    static consumeQueue(queueName: string, callback: any): void;
    static acknowledgeMessage(message: Message): void;
}
