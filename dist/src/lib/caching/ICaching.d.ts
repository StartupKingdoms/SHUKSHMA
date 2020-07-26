export interface ICaching {
    set(key: string, value: JSON): any;
    get(key: any): any;
    deserialize(data: string): any;
    serialze(data: JSON): any;
}
