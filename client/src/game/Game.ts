import {WebsocketGameConnection} from "./WebsocketGameConnection";
import {GamePublisher} from "./GamePublisher";
import {GameListener} from "./GameListener";

export class Game implements GamePublisher {
    private _commands: Map<string, Set<GameListener>> = new Map<string, Set<GameListener>>();

    constructor() {
        const websocket = new WebsocketGameConnection("ws://localhost:3003", this);
        websocket.open(1000);
    }

    attach(command: string, listener: GameListener): void {
        let listeners = this._commands.get(command);

        if(!listeners) {
            listeners = new Set<GameListener>();
        }
        listeners.add(listener);

        this._commands.set(command, listeners);
    }

    detach(command: string, listener: GameListener): void {
    }

    notify(command: string, payload: string): void {
        let listeners = this._commands.get(command);

        if(listeners) {
            for (const listener of listeners) {
                listener.update(payload);
            }
        }
    }
}