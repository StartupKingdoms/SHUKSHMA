// Mostly from http://codingsans.com/blog/mongoose-models-using-typescript-classes

import * as mongoose from 'mongoose';
import {connect} from 'mongoose';

export class MongoConnection {

    // private url:string // later change this to take from config

    static db:mongoose.Connection;
    constructor(url:string , config:mongoose.ConnectionOptions) {
        // this.url = 'mongodb://ds013559.mlab.com:13559/courseman-test';
        if (!MongoConnection.db) {
           this.createConnection(url,config); 
        } 
    }

  
    
    public createConnection(url,config):mongoose.Connection{
        
        mongoose.connect(url,config).catch(error=>{
            // HANDLE ERROR HERE 
            console.log(error);
            
            // process.exit(0);
        });
       
        MongoConnection.db = mongoose.connection ;

        MongoConnection.db.on('error', function(error) {
            console.log('connection error for mongodb:',error.message)
        });

        MongoConnection.db.once('open', function() {
            console.log( 'Mongoose connection success');
        });

        MongoConnection.db.on('connected', function(){
            console.log("Mongoose default connection is open");
        });
    
        MongoConnection.db.on('disconnected', function(){
            console.log("Mongoose default connection is disconnected");
        });
    
        // process.on('SIGINT', function(){
        //     MongoConnection.db.close(function(){
        //         console.log("Mongoose default connection is disconnected due to application termination");
        //         process.exit(0)
        //     });
        // });

        return MongoConnection.db ;
    }

    public closeConnection(){
        MongoConnection.db.close();
    }
}

