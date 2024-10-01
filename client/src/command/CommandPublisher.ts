import {CommandListener} from "./CommandListener";

export class CommandPublisher {
    private _subscribers = new Map<string, Set<CommandListener>>();

    subscribe(command: string, listener: CommandListener) {
        var set = this._subscribers.get(command);
        if(!set) {
            set = new Set<CommandListener>();
        }
        set.add(listener);
    }

    notify(command: string, payload: string) : void {
        var set = this._subscribers.get(command);
        if(set) {
            for (var commandListener of set) {
                commandListener.handle(payload);
            }
        }
    }
}