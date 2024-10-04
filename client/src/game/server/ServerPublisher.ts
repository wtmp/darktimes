import {EventController} from "../event/EventController";

export interface ServerPublisher {
    attach(event: string, handler: EventController) : void;
    detach(listener: EventController) : void;
    notify(event: string, payload: string) : void;
}