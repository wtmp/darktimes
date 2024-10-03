import {ServerConnect} from "./server/ServerConnect";
import {EventDispatcher} from "./event/EventDispatcher";
import {Server} from "./server/Server";

export class FakeServerConnect implements ServerConnect {
    private _dispatcher!: EventDispatcher;
    private _server!: Server;

    connect(server: Server, dispatcher: EventDispatcher): void {
        this._dispatcher = dispatcher;
        this._server = server;

        this._dispatcher.dispatch("hello", "hello123asdf");
        this._dispatcher.dispatch("hello2", "hello1");
    }

    isConnected(): boolean {
        return true;
    }
}