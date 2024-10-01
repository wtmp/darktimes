export interface CommandListener {
    handle(payload: string) : void;
}