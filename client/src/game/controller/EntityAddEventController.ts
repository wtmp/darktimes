import {EventController} from "../event/EventController";
import * as Phaser from "phaser";
import Sprite = Phaser.GameObjects.Sprite;

export class EntityAddEventController implements EventController {
    private _sprite!: Sprite;

    constructor(scene: Phaser.Scene) {
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
        this._sprite.setData("name", o.name);
    }
}