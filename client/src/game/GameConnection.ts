export class GameConnection {
    private _url: string;
    private _webSocket: WebSocket | undefined;

    constructor(url: string) {
        this._url = url;
    }

    get url(): string {
        return this._url;
    }

    get webSocket(): WebSocket | undefined {
        return this._webSocket;
    }

    set webSocket(value: WebSocket | undefined) {
        this._webSocket = value;
    }

    isOpen() : boolean {
        if(this.webSocket) {
            if(this.webSocket.readyState === WebSocket.OPEN) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}