export class WorldMap {
    private _width: number;
    private _height: number;
    private _tileSide: number;

    private _tiles: number[] | undefined;

    constructor(width: number, height: number, tileSize: number) {
        this._width = width;
        this._height = height;
        this._tileSide = tileSize;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get tileSide(): number {
        return this._tileSide;
    }

    get tiles(): number[] | undefined {
        return this._tiles;
    }

    set tiles(value: number[] | undefined) {
        this._tiles = value;
    }
}