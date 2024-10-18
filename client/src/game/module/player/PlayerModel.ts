import {Player} from "./Player";
import {PlayerMovement} from "./PlayerMovement";
import {PlayerContract} from "./PlayerContract";

export class PlayerModel implements PlayerContract.PlayerModel {
    private _player: Player;
    private _movement: PlayerMovement;

    constructor(player: Player) {
        this._player = player;
        this._movement = new PlayerMovement(player);
    }

    getPlayerName(): string {
        return this._player.name;
    }

    getPlayerX(): number {
        return this._player.x;
    }

    getPlayerY(): number {
        return this._player.y;
    }

    movePlayer(dx: number, dy: number): void {
        this._movement.movePlayer(dx, dy);
    }
}