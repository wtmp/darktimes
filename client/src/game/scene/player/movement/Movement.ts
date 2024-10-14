import {MovementPresenter} from "./MovementPresenter";
import {MovementView} from "./MovementView";
import Phaser from "phaser";
import Sprite = Phaser.GameObjects.Sprite;

export class Movement implements MovementView {
    private _sprite: Sprite;
    private _presenter: MovementPresenter;

    constructor(sprite: Phaser.GameObjects.Sprite) {
        this._sprite = sprite;
        this._presenter = new MovementPresenter(this);
    }

    displayMovement(x: number, y: number): void {
        if(x > 0) {
            this._sprite.setX(x);
        }

        if(y > 0) {
            this._sprite.setY(y);
        }
    }

    onMovement(direction: string): void {
        this._presenter.moveTo(this._sprite.x, this._sprite.y, direction);
    }
}