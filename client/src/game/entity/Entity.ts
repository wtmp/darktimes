export class Entity {
    private _title!: string;
    private _code!: number;

    constructor(title: string, code: number) {
        this._title = title;
        this._code = code;
    }

    get title(): string {
        return this._title;
    }

    get code(): number {
        return this._code;
    }
}