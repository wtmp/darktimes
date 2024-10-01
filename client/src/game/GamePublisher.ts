import {GameListener} from "./GameListener";

export interface GamePublisher {
    attach(command: string, listener: GameListener) : void;
    detach(command: string, listener: GameListener) : void;
    notify(command: string, payload: string) : void;
}