export interface EventController {
    handle(event: string, payload: string): void;
}