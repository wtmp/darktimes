import {Scene} from "phaser";
import Ellipse = Phaser.GameObjects.Ellipse;
import Text = Phaser.GameObjects.Text;

export class MapScene extends Scene {
    private _scale: integer = 0;
    private _keys:any;

    private _ellipse!: Ellipse;
    private _text!: Text;


    preload() : void {
        //this.load.path = "./assets";
    }

    create() : void {
        this._ellipse = this.add.ellipse(200, 200, 10, 20, 0xff0000);

        this._text = this.add.text(50, 50, "");

        this._keys = this.input.keyboard?.addKeys("P, A");
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        if(this._keys.P.isDown) {
            this._scale += 0.01;
            this._ellipse.rotation = this._scale;
            this._text.setText("huy: " + this._scale);
        }
    }
}