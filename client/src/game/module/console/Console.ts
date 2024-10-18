export class Console {
    private _prompt: string;
    private _text: string;

    constructor(prompt: string, text: string) {
        this._prompt = prompt;
        this._text = text;
    }

    get prompt(): string {
        return this._prompt;
    }

    set prompt(value: string) {
        this._prompt = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}