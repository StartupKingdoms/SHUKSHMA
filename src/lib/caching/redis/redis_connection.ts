import {RedisClient,createClient,ClientOpts} from 'redis';

export class RedisConnection {

    static cacheStore:RedisClient;

    constructor(config:ClientOpts) {
        if (!RedisConnection.cacheStore) {
           this.createConnection(config);
        } 
    }
    
    public createConnection(config){
        
        RedisConnection.cacheStore = createClient(config)

        RedisConnection.cacheStore.on('error', function(error) {
            // console.log('connection error for redis:',error.message)
        });

        RedisConnection.cacheStore.once('ready', function() {
            // console.log( 'Redis connection open');
        });

        RedisConnection.cacheStore.on('connect', function(){
            // console.log("Redis default stream is connected to the server");
        });
    
        RedisConnection.cacheStore.on('disconnected', function(){
            // console.log("Redis default connection is disconnected");
        });


        return RedisConnection.cacheStore ;
    }
}

