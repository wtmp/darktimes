import {GameConnection} from "./GameConnection";

export class GameConnectionKeeper {
    private _connection: GameConnection | undefined;
    private _stopConnection: boolean = false;

    constructor(connection: GameConnection | undefined) {
        this._connection = connection;
    }

    start(timeout: number) : void {
        this._stopConnection = false;

        if(this._connection) {
            setTimeout(() => {
                if(this._connection) {
                    if(this._stopConnection) {
                        return;
                    }

                    if (!this._connection.isOpen()) {
                        console.log("trying to open websocket to url: ", this._connection.url);

                        this._connection.webSocket = new WebSocket(this._connection.url);
                    }
                }
            }, timeout);
        }
    }

    stop() : void {
        this._stopConnection = true;
    }
}