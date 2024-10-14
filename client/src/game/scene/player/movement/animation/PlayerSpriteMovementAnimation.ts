import {PlayerSpriteMovementAnimationView} from "./PlayerSpriteMovementAnimationView";
import {PlayerSprite} from "../PlayerSprite";
import {PlayerSpriteMovementAnimationPresenter} from "./PlayerSpriteMovementAnimationPresenter";

export class PlayerSpriteMovementAnimation implements PlayerSpriteMovementAnimationView {
    private _playerSprite: PlayerSprite;
    private _presenter: PlayerSpriteMovementAnimationPresenter;

    constructor(playerSprite: PlayerSprite) {
        this._playerSprite = playerSprite;
        this._presenter = new PlayerSpriteMovementAnimationPresenter(this);
    }

    displayAnimation(direction: string): void {
    }
}