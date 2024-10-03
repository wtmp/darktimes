import {Server} from "./server/Server";
import {ServerConnect} from "./server/ServerConnect";
import {FakeServerConnect} from "./FakeServerConnect";
import {GameEventDispatcher} from "./GameEventDispatcher";
import {ServerPublisher} from "./server/ServerPublisher";
import {EventDispatcher} from "./event/EventDispatcher";
import {GameServerPublisher} from "./GameServerPublisher";
import {HelloEventHandler} from "./handler/HelloEventHandler";

export class Game {
    private _server!: Server;

    constructor(server: Server) {
        this._server = server;

        let serverConnect: ServerConnect = new FakeServerConnect();
        let serverPublisher: ServerPublisher = new GameServerPublisher();
        let eventDispatcher: EventDispatcher = new GameEventDispatcher(serverPublisher);

        serverPublisher.attach("hello", new HelloEventHandler());
        serverPublisher.attach("hello2", new HelloEventHandler());

        serverConnect.connect(this._server, eventDispatcher);
    }
}