import {MovementView} from "./MovementView";
import {CompassPresenter} from "./CompassPresenter";
import {Movement} from "./Movement";
import {Direction} from "./Direction";

export class MovementPresenter implements Movement  {
    private _view: MovementView;

    constructor(view: MovementView) {
        this._view = view;
    }

    move(direction: Direction, speed: number): void {
        this._view.displayMovement(direction);
    }
}