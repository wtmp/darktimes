import {ServerConnect} from "./server/ServerConnect";
import {EventDispatcher} from "./event/EventDispatcher";
import {Server} from "./server/Server";

export class FakeServerConnect implements ServerConnect {
    private _dispatcher!: EventDispatcher;
    private _server!: Server;

    connect(server: Server, dispatcher: EventDispatcher): void {
        this._dispatcher = dispatcher;
        this._server = server;

        this._dispatcher.dispatch("SHOW_ENTITY", "{\"title\": \"huy\", \"code\": \"2244\", \"x\": \"32\", \"y\": \"32\"}");
        this._dispatcher.dispatch("SHOW_ENTITY", "{\"title\": \"huy\", \"code\": \"2244\", \"x\": \"64\", \"y\": \"32\"}");
        this._dispatcher.dispatch("SHOW_ENTITY", "{\"title\": \"huy\", \"code\": \"2244\", \"x\": \"128\", \"y\": \"32\"}");
    }

    isConnected(): boolean {
        return true;
    }
}