import {Scene} from "phaser";
import Ellipse = Phaser.GameObjects.Ellipse;
import Text = Phaser.GameObjects.Text;
import Sprite = Phaser.GameObjects.Sprite;

export class MapScene extends Scene {
    private _scale: integer = 0;
    private _keys:any;

    private _ellipse!: Ellipse;
    private _text!: Text;

    private _x : integer = 0;
    private _y : integer = 0;

    private _human? : Sprite;

    preload() : void {
        this.load.spritesheet("human", "./assets/blowharder.png", {
                    frameWidth: 16,
                    frameHeight: 16
            }
        );
    }

    create() : void {
        // this._ellipse = this.add.ellipse(200, 200, 10, 20, 0xff0000);
        //
        // this._ellipse.scale = 2;
        //
        // this._ellipse.setInteractive();
        //
        // this._ellipse.on("pointerdown", () => {
        //     this._text.setText("pezda");
        // });

        this._text = this.add.text(50, 50, "");

        this._keys = this.input.keyboard?.addKeys("A, D, W, S");

        this.anims.create({
            key: "humanDown",
            frames: this.anims.generateFrameNumbers("human", {start: 6 * 116 + 37, first: 6 * 116 + 37, end: 6 * 116 + 39}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "humanUp",
            frames: this.anims.generateFrameNumbers("human", {start: 6 * 116 + 43, first: 6 * 116 + 43, end: 6 * 116 + 45}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "humanRight",
            frames: this.anims.generateFrameNumbers("human", {start: 6 * 116 + 40, first: 6 * 116 + 40, end: 6 * 116 + 42}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "humanLeft",
            frames: this.anims.generateFrameNumbers("human", {start: 6 * 116 + 40, first: 6 * 116 + 40, end: 6 * 116 + 42}),
            frameRate: 10,
            repeat: -1
        });

        this._human = this.add.sprite(200, 200, "human", 6 * 116 + 37);

        this._human.scale = 2;
    }

    update(time: number, delta: number) {
        super.update(time, delta);

        if(this._keys.S.isDown) {
            // this._x = 14 * 116 + 50;
            // this._y = 30;
            // if(this._human) {
            //     //this._human.x = this._x;
            //     //this._human.y = this._y;
            // }
            // this._text.setText("huy: " + this._x);
            // this._human?.setFrame(this._x);
            this._human?.play("humanDown");
        }

        if(this._keys.D.isDown) {
            this._human?.play("humanRight").setFlipX(false);
        }

        if(this._keys.A.isDown) {
            this._human?.play("humanLeft").setFlipX(true);
        }

        if(this._keys.W.isDown) {
            this._human?.play("humanUp");
        }
    }
}