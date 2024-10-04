import {EventController} from "../event/EventController";

export class HelloEventController implements EventController {
    handle(payload: string): void {
        let o = JSON.parse(payload);
        console.log("huy123" + o);

        console.log(" huy ");
    }
}