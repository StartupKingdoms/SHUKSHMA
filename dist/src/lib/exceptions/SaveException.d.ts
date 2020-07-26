export declare class SaveException {
    private name;
    private error_message;
    private stackTrace;
    constructor(name: string, error_message: string, stackTrace: string);
    save(): Promise<void>;
}
