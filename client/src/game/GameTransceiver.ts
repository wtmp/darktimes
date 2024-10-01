export interface GameTransceiver {
    send(data: string) : void;
    receive(ev: MessageEvent) : void;
}