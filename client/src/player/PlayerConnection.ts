export class PlayerConnection {
    private _url : string;
    private _connection! : WebSocket;


    set connection(value: WebSocket) {
        this._connection = value;
    }

    constructor(url : string) {
        this._url = url;
        this.connect();
    }

    private connect() : void {
        this._connection = new WebSocket(this._url);

        if(this._connection) {
            console.log("trying to connect...");

            this._connection.onopen = () => {
                console.log("connection open");
            };

            this._connection.onerror = () => {
                console.log("connection error");
                this.reconnect();
            };
        }
    }

    private reconnect() : void {
        console.log("reconnecting [\\]");
        setTimeout(() => {
            this.connect();
        }, 1000);
    }
}