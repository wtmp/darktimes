import {PlayerView} from "./PlayerView";
import {PlayerDirection} from "./PlayerDirection";


export class PlayerPresenter {
    private _view: PlayerView;

    private _playerDirection: PlayerDirection;

    constructor(view: PlayerView) {
        this._view = view;
        this._playerDirection = new PlayerDirection();
    }

    moveTo(x: number, y: number, direction: string) {
        if(direction !== "0") {
            this._view.displayAnimation(direction);
        }

        switch(direction) {
            case "1":
                this._view.displayPlayer(x - 1,y + 1);
                break;
            case "2":
                this._view.displayPlayer(x, y + 1);
                break;
            case "3":
                this._view.displayPlayer(x + 1, y + 1);
                break;
            case "4":
                this._view.displayPlayer(x - 1, y);
                break;
            case "5":
                break;
            case "6":
                this._view.displayPlayer(x + 1, y);
                break;
            case "7":
                this._view.displayPlayer(x - 1, y - 1);
                break;
            case "8":
                this._view.displayPlayer(x, y - 1);
                break;
            case "9":
                this._view.displayPlayer(x + 1, y - 1);
                break;
            default:
                break;
        }
    }
}