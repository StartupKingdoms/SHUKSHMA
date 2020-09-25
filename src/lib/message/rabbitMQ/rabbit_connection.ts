import {
    connect,
    Connection,
    Channel,Message
} from 'amqplib';


export class RabbitConnection {

    static channel: Channel;

    constructor(connection_url:string) {

        if (!RabbitConnection.channel) {
            this.createConnection(connection_url).then(async (connection: Connection) => {
                await this.createDefaultChannel(connection);
                // EVENT LISTENERS SETUP
            }).catch(error => {
                // HANDLE CONNECTION EXCEPTION 
                console.log("handled rabbit connection error ", error);
            });
        }else{
            console.log("Channel already exists");
            
        }
    }

    async createConnection(connection_url:string): Promise < Connection > {
        try {
            const connection = await connect(connection_url);
            return connection;
        } catch (error) {
            // Handle error here **@mayur_tikundi
            console.log("error connecting to Rabbitmq ",error);
            return Promise.reject(error)
        }
    }

    async createDefaultChannel(connection: Connection) {
        RabbitConnection.channel = await connection.createChannel();
        console.log("channel created ")
        // SET UP CHANNEL LISTENERS HERE
    }

    static async addQueue(queueName: string): Promise < boolean > {
        if (this.channel) {
            await this.channel.assertQueue(queueName);
            return true;
        }
        return false ;
    }

    static async sendToQueue(queueName: string, message: object) {
        return await this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    }

    static async consumeQueue(queueName:string , callback){
        return this.channel.consume(queueName,callback);
    }

    static async acknowledgeMessage(message:Message){
        // await RabbitConnection.channel.ack(message);
        return true;
    }
}