import {Player} from "./Player";

export class PlayerMovement {
    private _player: Player;

    constructor(player: Player) {
        this._player = player;
    }

    movePlayer(dx: number, dy: number): void {
        this._player.x = this._player.x + dx;
        this._player.y = this._player.y + dy;
    }
}