export class WSClient {
    private _connection?: WebSocket;

    get connection(): WebSocket | any {
        return this._connection;
    }

    set connection(value: WebSocket | any) {
        this._connection = value;
    }

    connect() : void {
        this.connection = new WebSocket("ws://127.0.0.1:3000");

        this.connection.onopen(() => {
            this.connection.send("ping");
        });
    }
}