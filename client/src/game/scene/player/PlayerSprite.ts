import {PlayerView} from "./PlayerView";
import Phaser from "phaser";
import Sprite = Phaser.GameObjects.Sprite;
import {PlayerPresenter} from "./PlayerPresenter";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import {PlayerAnimation} from "./PlayerAnimation";
import {MoveDownAnimation} from "./animation/MoveDownAnimation";
import {MoveUpAnimation} from "./animation/MoveUpAnimation";
import {MoveSidewayAnimation} from "./animation/MoveSidewayAnimation";
import {PlayerDirection} from "./PlayerDirection";

export class PlayerSprite extends Sprite implements PlayerView {
    private _presenter: PlayerPresenter;
    private _animations: PlayerAnimation[];
    private _direction: PlayerDirection;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, 200, 200, "tiles", 2241);

        scene.add.existing(this);

        this._presenter = new PlayerPresenter(this);
        this._direction = new PlayerDirection();

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
        this.setX(x);
        this.setY(y);
    }

    update(time: number, delta: number) {
        var mouse = this.scene.input.mousePointer;

        if(mouse.leftButtonReleased()) {
            this.setAngle(0);
        }

        if(mouse.leftButtonDown()) {
            var direction = this._direction.detect(this.scene.cameras.main.width / 2,
                this.scene.cameras.main.height / 2,
                mouse.x,
                mouse.y);

            this._presenter.handleMouseDown(this.x, this.y, direction);
        }
    }
}