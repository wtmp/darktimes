import {EventHandler} from "../event/EventHandler";

export class HelloEventHandler implements EventHandler {
    handle(payload: string): void {
        console.log("huy123" + payload);
    }
}