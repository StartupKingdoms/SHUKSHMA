

export interface ICaching {
    set(key:string, value:JSON);
    get(key);
    deserialize(data:string);
    serialze(data:JSON);
}