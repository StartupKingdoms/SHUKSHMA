import { HttpContent } from "inversify-express-utils";

export class ResponseContent extends HttpContent{
    private content:object ;
    constructor(content:object){
        super();
        this.content = content
    }

    async readAsStringAsync(): Promise<string> {
        const string_content = JSON.stringify(this.content)
        return string_content;
    }

} 