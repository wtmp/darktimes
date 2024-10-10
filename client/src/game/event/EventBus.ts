import EventEmitter = Phaser.Events.EventEmitter;

export class EventBus {
    public static readonly emitter: EventEmitter = new Phaser.Events.EventEmitter();
}