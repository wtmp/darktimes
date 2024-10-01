import {WorldMap} from "./WorldMap";

export class WorldMapUpdater {
    private _worldMap: WorldMap | undefined;

    constructor(worldMap: WorldMap | undefined) {
        this._worldMap = worldMap;
    }

    update(data: number[]) : void {
        if(data) {
            if(this._worldMap) {
                this._worldMap.tiles = data;
            }
        }
    }
}