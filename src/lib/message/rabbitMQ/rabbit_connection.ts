import {    connect,    Connection,    Channel,Message} from 'amqplib';
import {IocContainer} from '../../IOC/ioc_container';
import { Log} from '../../log/log';
import {DEFUALT_TYPES} from '../../types';

export class RabbitConnection {

    static channel: Channel;
    private logger: Log;

    constructor() {
        this.logger = IocContainer.get_ioc_container().get < Log > (DEFUALT_TYPES.LOG);

        if (!RabbitConnection.channel) {
            this.createConnection().then(async (connection: Connection) => {
                await this.createDefaultChannel(connection);
                // EVENT LISTENERS SETUP
            }).catch(error => {
                // HANDLE CONNECTION EXCEPTION 
                console.log("handled rabbit connection error ", error);
            });
        }
    }

    async createConnection(): Promise < Connection > {
        try {
            const connection = await connect("amqp://localhost:5672");
            return Promise.resolve(connection);
        } catch (error) {
            // Handle error here **@mayur_tikundi
            console.log("error connecting ");
            return Promise.reject(error)
        }
    }

    async createDefaultChannel(connection: Connection) {
        RabbitConnection.channel = await connection.createChannel();
        console.log("channel created ")
        // SET UP CHANNEL LISTENERS HERE
    }

    static async addQueue(queueName: string) {
        if (!RabbitConnection.channel.checkQueue(queueName)) {
            await RabbitConnection.channel.assertQueue(queueName);
        }
    }

    static async sendToQueue(queueName: string, message: object) {
        await RabbitConnection.channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    }

    static consumeQueue(queueName:string , callback){
        RabbitConnection.channel.consume(queueName,callback);
    }

    static acknowledgeMessage(message:Message){
        RabbitConnection.channel.ack(message);
    }
}