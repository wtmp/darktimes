import {EventDispatcher} from "./event/EventDispatcher";
import {ServerPublisher} from "./server/ServerPublisher";

export class GameEventDispatcher implements EventDispatcher {
    private _publisher!: ServerPublisher;

    constructor(publisher: ServerPublisher) {
        this._publisher = publisher;
    }

    dispatch(event: string, payload: string): void {
        this._publisher.notify(event, payload);
    }
}