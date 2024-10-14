import {SpriteMovementPresenter} from "./SpriteMovementPresenter";
import {SpriteMovementView} from "./SpriteMovementView";
import Phaser from "phaser";
import Sprite = Phaser.GameObjects.Sprite;

export class SpriteMovement implements SpriteMovementView {
    private _sprite: Sprite;
    private _presenter: SpriteMovementPresenter;

    constructor(sprite: Phaser.GameObjects.Sprite) {
        this._sprite = sprite;
        this._presenter = new SpriteMovementPresenter(this);
    }

    displayMovement(x: number, y: number): void {
        if(x > 0) {
            this._sprite.setX(x);
        }

        if(y > 0) {
            this._sprite.setY(y);
        }
    }

    onEnableMovement(direction: string): void {
        this._presenter.moveTo(this._sprite.x, this._sprite.y, direction);
    }
}