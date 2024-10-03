import {EventHandler} from "../event/EventHandler";

export interface ServerPublisher {
    attach(event: string, handler: EventHandler) : void;
    detach(listener: EventHandler) : void;
    notify(event: string, payload: string) : void;
}