import {ServerPublisher} from "./server/ServerPublisher";
import {EventController} from "./event/EventController";

export class GameServerPublisher implements ServerPublisher {
    private _handlers: Map<string, Set<EventController>> = new Map<string, Set<EventController>>();

    attach(event: string, handler: EventController): void {
        let handlers = this._handlers.get(event);

        if(!handlers) {
            handlers = new Set<EventController>();
        }
        handlers.add(handler);

        this._handlers.set(event, handlers);
    }

    detach(handler: EventController): void {
    }

    notify(forEvent: string, payload: string): void {
        let handlers = this._handlers.get(forEvent);

        if(handlers) {
            for (const handler of handlers) {
                handler.handle(forEvent, payload);
            }
        }
    }
}