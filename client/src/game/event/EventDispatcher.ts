import {EventController} from "./EventController";

export interface EventDispatcher {
    dispatch(event: string, payload: string): void;
    add(event: string, handler: EventController): void;
    remove(event: string): void;
}