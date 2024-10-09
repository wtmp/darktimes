import { EventController } from "./event/EventController";
import {EventDispatcher} from "./event/EventDispatcher";

export class GameEventDispatcher implements EventDispatcher {
    private _controllers: Map<string, EventController> = new Map();

    dispatch(event: string, payload: string): void {
        const controller = this._controllers.get(event);
        if(controller) {
            controller.handle(event, payload);
        }
    }

    add(event: string, handler: EventController): void {
        this._controllers.set(event, handler);
    }

    remove(event: string): void {
        this._controllers.delete(event);
    }
}