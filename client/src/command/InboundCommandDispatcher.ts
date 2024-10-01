import { Command } from "./Command";
import {CommandDispatcher} from "./CommandDispatcher";

export class InboundCommandDispatcher implements CommandDispatcher {
    dispatch(command: Command): void {
        throw new Error("Method not implemented.");
    }
}