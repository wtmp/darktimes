import {Server} from "./server/Server";
import {ServerConnect} from "./server/ServerConnect";
import {FakeServerConnect} from "./FakeServerConnect";
import {GameEventDispatcher} from "./GameEventDispatcher";
import {ServerPublisher} from "./server/ServerPublisher";
import {EventDispatcher} from "./event/EventDispatcher";
import {GameServerPublisher} from "./GameServerPublisher";
import {HelloEventHandler} from "./handler/HelloEventHandler";
import {Entity} from "./entity/Entity";
import {ShowEntityEventHandler} from "./handler/ShowEntityEventHandler";
import {Scene} from "phaser";

export class Game {
    private _server!: Server;
    private _scene: Scene;

    constructor(server: Server, scene: Scene) {
        this._server = server;
        this._scene = scene;

        let serverConnect: ServerConnect = new FakeServerConnect();
        let serverPublisher: ServerPublisher = new GameServerPublisher();
        let eventDispatcher: EventDispatcher = new GameEventDispatcher(serverPublisher);

        serverPublisher.attach("hello", new HelloEventHandler());
        serverPublisher.attach("hello2", new HelloEventHandler());
        serverPublisher.attach("SHOW_ENTITY", new ShowEntityEventHandler(this._scene));

        let entity = new Entity("huynja", 750);

        serverConnect.connect(this._server, eventDispatcher);
    }
}