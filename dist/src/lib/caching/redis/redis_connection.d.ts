import { RedisClient, ClientOpts } from 'redis';
export declare class RedisConnection {
    static cacheStore: RedisClient;
    constructor(config: ClientOpts);
    createConnection(config: any): RedisClient;
}
