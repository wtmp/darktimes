import {GameConnection} from "./GameConnection";
import {GameTransceiver} from "./GameTransceiver";

export class WebsocketGameConnection implements GameConnection, GameTransceiver {
    private _url: string;
    private _webSocket: WebSocket | undefined;
    private _isStopped: boolean;

    constructor(url: string) {
        this._url = url;
        this._isStopped = false;
    }

    private onOpen = (ev : Event) => {
        console.log(ev + " open connection");
    }

    private onClose = (ev : CloseEvent) => {
        console.log(ev + " close connection");
    }

    private onError = (ev : Event) => {
        console.log(ev + " error");

        if(!this._isStopped) {
            this.start(1000);
        }
    }

    private onMessage = (ev: MessageEvent) => {
        this.receive(ev);
    }

    start(timeout: number) : void {
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

    stop() : void {
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