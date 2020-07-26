import * as mongoose from 'mongoose';
export declare class MongoConnection {
    static db: mongoose.Connection;
    constructor(url: string, config: mongoose.ConnectionOptions);
    createConnection(url: any, config: any): mongoose.Connection;
    closeConnection(): void;
}
