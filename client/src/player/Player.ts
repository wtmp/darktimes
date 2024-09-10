export class Player {
    private _name? : string;
    private _id? : string;
    private _x? : integer;
    private _y? : integer;

    get name(): string | any {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): string | any {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
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