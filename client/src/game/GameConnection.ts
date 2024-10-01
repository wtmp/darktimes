export interface GameConnection {
    start(timeout: number) : void;
    stop() : void;
    isAlive() : boolean;
}