export class WorldMap {
    private _width: number = 0;
    private _height: number = 0;
    private _tileSize: number = 0;

    private _tileData: number[] | undefined;

    constructor(width: number, height: number, tileSize: number) {
        this._width = width;
        this._height = height;
        this._tileSize = tileSize;
    }

    get tileData(): number[] {
        return this._tileData === undefined ? [] : this._tileData;
    }

    set tileData(value: number[]) {
        this._tileData = value;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get tileSize(): number {
        return this._tileSize;
    }
}