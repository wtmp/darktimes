import {EventHandler} from "../event/EventHandler";

export class HelloEventHandler implements EventHandler {
    handle(payload: string): void {
        let o = JSON.parse(payload);
        console.log("huy123" + o);

        console.log(" huy ");
    }
}