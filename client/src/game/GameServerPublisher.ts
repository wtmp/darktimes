import {ServerPublisher} from "./server/ServerPublisher";
import {EventHandler} from "./event/EventHandler";

export class GameServerPublisher implements ServerPublisher {
    private _handlers: Map<string, Set<EventHandler>> = new Map<string, Set<EventHandler>>();

    attach(event: string, handler: EventHandler): void {
        let handlers = this._handlers.get(event);

        if(!handlers) {
            handlers = new Set<EventHandler>();
        }
        handlers.add(handler);

        this._handlers.set(event, handlers);
    }

    detach(handler: EventHandler): void {
    }

    notify(forEvent: string, payload: string): void {
        let handlers = this._handlers.get(forEvent);

        if(handlers) {
            for (const handler of handlers) {
                handler.handle(payload);
            }
        }
    }
}