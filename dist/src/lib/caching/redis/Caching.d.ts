import { ICaching } from "../ICaching";
export declare class Caching implements ICaching {
    private getAsync;
    constructor();
    set(key: string, value: Object): Promise<any>;
    get(key: any): Promise<any>;
    deserialize(data: string): any;
    serialze(data: Object): string;
}
