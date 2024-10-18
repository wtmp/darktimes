import {PlayerModel} from "./PlayerModel";
import { PlayerContract } from "./PlayerContract";
import { Player } from "./Player";
import {Direction} from "../../Direction";

export class PlayerPresenter implements PlayerContract.PlayerPresenter {
    private _view: PlayerContract.PlayerView;
    private _model: PlayerModel;

    constructor(view: PlayerContract.PlayerView) {
        this._view = view;
        this._model = new PlayerModel(new Player(0, 0));
    }

    onMovement(direction: Direction): void {
        let x = this._model.getPlayerX();
        let y = this._model.getPlayerY();

        let dx = 0;
        let dy = 0;

        switch(direction) {
            case Direction.N:  dx = 0;  dy = -1; break;
            case Direction.S:  dx = 0;  dy = 1;  break;
            case Direction.E:  dx = 1;  dy = 0;  break;
            case Direction.W:  dx = -1; dy = 0;  break;
            case Direction.NE: dx = 1;  dy = -1; break;
            case Direction.NW: dx = -1; dy = -1; break;
            case Direction.SE: dx = 1;  dy = 1;  break;
            case Direction.SW: dx = -1; dy = 1;  break;
        }

        this._model.movePlayer(dx, dy);

        this._view.displayPlayer(x, y);
        this._view.displayPlayerMoveAnimation(direction);
        this._view.displayPlayerMove(dx, dy);

        console.log(Math.round(this._model.getPlayerX() / 32),
            Math.round(this._model.getPlayerY() / 32));
    }

    onPlayerClick(): void {
        this._view.displayPlayerName(this._model.getPlayerName());
    }
}