import {PlayerSpriteView} from "./PlayerSpriteView";
import Phaser from "phaser";
import {PlayerSpritePresenter} from "./PlayerSpritePresenter";
import {PlayerSpriteAnimation} from "./PlayerSpriteAnimation";
import {MoveDownAnimation} from "./animation/MoveDownAnimation";
import {MoveUpAnimation} from "./animation/MoveUpAnimation";
import {MoveSidewayAnimation} from "./animation/MoveSidewayAnimation";
import {PlayerUtils} from "./PlayerUtils";
import Sprite = Phaser.GameObjects.Sprite;

export class PlayerSprite extends Sprite implements PlayerSpriteView {
    private _presenter: PlayerSpritePresenter;
    private _animations: PlayerSpriteAnimation[];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y,
            "tiles",
            2241);

        scene.add.existing(this);

        this._presenter = new PlayerSpritePresenter(this);

        this._animations = [
            new MoveUpAnimation(scene),
            new MoveDownAnimation(scene),
            new MoveSidewayAnimation(scene)
        ];

        this.setOrigin(0, 0);
        this.setScale(2);
    }

    displayAnimation(direction: string): void {
        switch(direction) {
            case "1":
                this._animations[1].displayAnimation(this, -7, false, false);
                break;
            case "2":
                this._animations[1].displayAnimation(this, 0, false, false);
                break;
            case "3":
                this._animations[1].displayAnimation(this, 7, false, false);
                break;
            case "4":
                this._animations[2].displayAnimation(this, 0, true, false);
                break;
            case "5":
                break;
            case "6":
                this._animations[2].displayAnimation(this, 0, false, false);
                break;
            case "7":
                this._animations[0].displayAnimation(this, -7, false, false);
                break;
            case "8":
                this._animations[0].displayAnimation(this, 0, false, false);
                break;
            case "9":
                this._animations[0].displayAnimation(this, 7, false, false);
                break;

            default:
                break;
        }
    }

    displayPlayer(x: number, y: number): void {
        if(x > 0) {
            this.setX(x);
        }

        if(y > 0) {
            this.setY(y);
        }
    }

    update(time: number, delta: number) {
        const mouse = this.scene.input.mousePointer;

        console.log(this.x, this.y);

        if(mouse.rightButtonReleased()) {
            this.setAngle(0);
        }

        if(mouse.rightButtonDown()) {
            const direction = PlayerUtils.detectDirection(this.scene.cameras.main.width / 2,
                this.scene.cameras.main.height / 2,
                mouse.x,
                mouse.y);

            this._presenter.moveTo(this.x, this.y, direction);
        }
    }
}