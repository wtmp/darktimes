export class Player {
    private _name : string = "default name";
    private _x : integer = 0;
    private _y : integer = 0;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get x(): any {
        return this._x;
    }

    set x(value: any) {
        this._x = value;
    }

    get y(): any {
        return this._y;
    }

    set y(value: any) {
        this._y = value;
    }
}