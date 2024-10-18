import {PlayerModel} from "./PlayerModel";
import { PlayerContract } from "./PlayerContract";
import { Player } from "./Player";
import {Direction} from "../../Direction";

export class PlayerPresenter implements PlayerContract.PlayerPresenter {
    private _view: PlayerContract.PlayerView;
    private _model: PlayerModel;

    constructor(view: PlayerContract.PlayerView) {
        this._view = view;
        this._model = new PlayerModel(new Player(32 * 100, 32 * 100));
    }

    onRightClick(direction: Direction): void {
        let x = this._model.getPlayerX();
        let y = this._model.getPlayerY();

        this._view.displayPlayer(x, y);
        this._view.displayPlayerMoveAnimation(direction);

        switch(direction) {
            case Direction.N:
                this._model.movePlayer(0, -1);
                this._view.displayPlayerMove(0, -1);
                break;
            case Direction.S:
                this._model.movePlayer(0, 1);
                this._view.displayPlayerMove(0, 1);
                break;
            case Direction.E:
                this._model.movePlayer(1, 0);
                this._view.displayPlayerMove(1, 0);
                break;
            case Direction.W:
                this._model.movePlayer(-1, 0);
                this._view.displayPlayerMove(-1, 0);
                break;
            case Direction.NE:
                this._model.movePlayer(1, -1);
                this._view.displayPlayerMove(1, -1);
                break;
            case Direction.NW:
                this._model.movePlayer(-1, -1);
                this._view.displayPlayerMove(-1, -1);
                break;
            case Direction.SE:
                this._model.movePlayer(1, 1);
                this._view.displayPlayerMove(1, 1);
                break;
            case Direction.SW:
                this._model.movePlayer(-1, 1);
                this._view.displayPlayerMove(-1, 1);
                break;
        }
    }
}