import {MovementView} from "./MovementView";

export class MovementPresenter {
    private _view: MovementView;

    constructor(view: MovementView) {
        this._view = view;
    }

    moveTo(x: number, y: number, direction: string): void {
        switch(direction) {
            case "1":
                this._view.displayMovement(x - 1,y + 1);
                break;
            case "2":
                this._view.displayMovement(x, y + 1);
                break;
            case "3":
                this._view.displayMovement(x + 1, y + 1);
                break;
            case "4":
                this._view.displayMovement(x - 1, y);
                break;
            case "5":
                break;
            case "6":
                this._view.displayMovement(x + 1, y);
                break;
            case "7":
                this._view.displayMovement(x - 1, y - 1);
                break;
            case "8":
                this._view.displayMovement(x, y - 1);
                break;
            case "9":
                this._view.displayMovement(x + 1, y - 1);
                break;
            default:
                break;
        }
    }
}