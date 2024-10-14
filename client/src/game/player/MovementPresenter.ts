import {MovementView} from "./MovementView";
import {Compass} from "./Compass";

export class MovementPresenter {
    private _view: MovementView;
    private _compass: Compass = new Compass();

    constructor(view: MovementView) {
        this._view = view;
    }

    move(sourceX: number, sourceY: number, targetX: number, targetY: number) {
        this._compass.setSource(sourceX, sourceY);
        this._compass.setTarget(targetX, targetY);
        this._view.displayMovement(this._compass.getCardinalDirection());
    }
}