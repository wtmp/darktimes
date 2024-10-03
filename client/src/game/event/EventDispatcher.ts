export interface EventDispatcher {
    dispatch(event: string, payload: string) : void;
}