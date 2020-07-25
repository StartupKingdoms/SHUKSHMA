export class SaveException{

    constructor(private name:string,private error_message:string, private stackTrace:string){
        this.save();
    }
   
    async save(){
        // get the error repository @mayur implement later
        // save the errors 
        console.log("hurray error  saved successfully ",this.error_message,this.stackTrace);
    }
}