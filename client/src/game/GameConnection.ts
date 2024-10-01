export interface GameConnection {
    open(timeout: number) : void;
    close() : void;
    isAlive() : boolean;
}