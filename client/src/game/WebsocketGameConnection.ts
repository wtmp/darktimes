import {GameConnection} from "./GameConnection";
import {GameTransceiver} from "./GameTransceiver";
import {GamePublisher} from "./GamePublisher";

export class WebsocketGameConnection implements GameConnection, GameTransceiver {
    private _url: string;
    private _webSocket: WebSocket | undefined;
    private _isStopped: boolean;
    private _publisher: GamePublisher | undefined;

    constructor(url: string, publisher: GamePublisher) {
        this._url = url;
        this._isStopped = false;
        this._publisher = publisher;
    }

    private onOpen = (ev : Event) => {
        console.log(ev + " open connection");
    }

    private onClose = (ev : CloseEvent) => {
        console.log("socket closed. " + ev.reason);

        if(!this._isStopped) {
            this.open(1000);
        }
    }

    private onError = (ev : Event) => {
        console.log("socket error.");

        if(this._webSocket) {
            this._webSocket.close();
        }
    }

    private onMessage = (ev:MessageEvent) => {
        if(this._publisher) {
            this._publisher.notify("huy", "pezda");
        }
    }

    open(timeout: number) : void {
        this._isStopped = false;

        setTimeout(() => {
            if (!this.isAlive()) {
                console.log("trying to open websocket to url: ", this._url);

                this._webSocket = new WebSocket(this._url);

                if(this._webSocket) {
                    this._webSocket.onopen = this.onOpen;
                    this._webSocket.onclose = this.onClose;
                    this._webSocket.onerror = this.onError;
                    this._webSocket.onmessage = this.onMessage;
                }
            }
        }, timeout);
    }

    send(data: string) : void {
        if(this._webSocket) {
            this._webSocket.send(data);
        }
    }

    receive(ev: MessageEvent) : void {
        console.log(ev + " event was received");
    }

    close() : void {
        this._isStopped = true;
    }

    isAlive() : boolean {
        if(this._webSocket) {
            if(this._webSocket.readyState === WebSocket.OPEN) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}