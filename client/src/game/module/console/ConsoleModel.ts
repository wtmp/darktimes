import {ConsoleContract} from "./ConsoleContract";
import {Console} from "./Console";

export class ConsoleModel implements ConsoleContract.ConsoleModel {
    private _prompt: Console = new Console("Console_> ", "");

    getPrompt(): string {
        return this._prompt.prompt;
    }

    getText(): string {
        return this._prompt.text;
    }

    setPrompt(text: string): void {
        this._prompt.prompt = text;
    }

    setText(text: string): void {
        this._prompt.text = text;
    }
}