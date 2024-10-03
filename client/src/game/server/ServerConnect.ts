import {Server} from "./Server";
import {EventDispatcher} from "../event/EventDispatcher";


export interface ServerConnect {
    connect(server: Server, dispatcher: EventDispatcher) : void;
    isConnected(): boolean;
}