import {Command} from "./Command";

export interface CommandDispatcher {
    dispatch(command: Command) : void;
}