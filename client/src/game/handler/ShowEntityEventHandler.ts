import {EventHandler} from "../event/EventHandler";
import {Scene} from "phaser";
import * as Phaser from "phaser";
import Sprite = Phaser.GameObjects.Sprite;

export class ShowEntityEventHandler implements EventHandler {
    private _scene: Scene;
    private _sprite!: Sprite;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;

        this._sprite = scene.make.sprite({}, true);
        this._sprite.setOrigin(0, 0);
        this._sprite.scale = 2;
    }

    handle(payload: string): void {
        let o = JSON.parse(payload);

        console.log(o);

        this._sprite.setX(o.x);
        this._sprite.setY(o.y);
        this._sprite.setTexture("tiles", o.code);
    }
}