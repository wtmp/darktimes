import {GameConnection} from "./GameConnection";
import {GameTransceiver} from "./GameTransceiver";
import {WebsocketGameConnection} from "./WebsocketGameConnection";

export class Game {
    private _gameConnection : GameConnection | undefined;
    private _gameTransceiver: GameTransceiver | undefined;

    constructor() {
        const websocket =
            new WebsocketGameConnection("ws://localhost:3003");

        this._gameConnection = websocket;
        this._gameTransceiver = websocket;

        websocket.start(1000);
    }
}