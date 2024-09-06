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
        this.load.spritesheet("tiles", "./assets/blowharder.png", {
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

        const start = 19 * 116 + 37;

        this.anims.create({
            key: "humanDown",
            frames: this.anims.generateFrameNumbers("tiles", {frames: [start, start + 1, start + 2, start]}),
            frameRate: 10,
            repeat: 1
        });

        this.anims.create({
            key: "humanUp",
            frames: this.anims.generateFrameNumbers("tiles", {frames: [start + 6, start + 7, start + 8, start + 6]}),
            frameRate: 10,
            repeat: 1
        });

        this.anims.create({
            key: "humanRightLeft",
            frames: this.anims.generateFrameNumbers("tiles", {frames: [start + 3, start + 4, start + 5, start + 3]}),
            frameRate: 10,
            repeat: 1
        });

        // for(let y=0; y<13; y++) {
        //     for(let x = 0; x<13; x++) {
        //         this.add.sprite(x * 32, y * 32, "tiles", start + 32).setOrigin(0, 0).scale = 2;
        //     }
        // }

        this._human = this.add.sprite(6 * 32, 6 * 32, "tiles", start);
        this._human.setOrigin(0, 0);
        this._human.scale = 2;

        this._human.setInteractive();
        this.input.setDraggable(this._human);
        this.input.on("drag", (pointer: any, gameObject: Sprite, dragX: number, dragY: number) => {
            this._human?.setX(dragX);
            this._human?.setY(dragY);
        })

        let tilesMap = [
            730, 730, 0, 3, 3,
            0, 1, 1, 0, 0,
            731, 732, 1, 19 * 116 + 37, 0,
            0, 0, 730, 730, 0,
            0, 0, 0, 0, 2
        ];

        const map = this.make.tilemap({
            width: 5,
            height: 5,
            tileWidth: 16,
            tileHeight: 16
        });

        const tileset = map.addTilesetImage("tiles");
        const layer = map.createBlankLayer("Background", tileset!);

        layer?.setScale(2);

        for(let y = 0; y<5; y++) {
            for(let x = 0; x<5; x++) {
                map.putTileAt(tilesMap[y*5+x], x, y, false, layer!);
            }
        }

        this.cameras.main.startFollow(this._human);
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
            let x = this._human!.x;
            let y = this._human!.y + 1;
            this._human!.setY(y);
        }

        if(this._keys.D.isDown) {
            this._human?.play("humanRightLeft").setFlipX(false);
            let x = this._human!.x + 1;
            let y = this._human!.y;
            this._human!.setX(x);
        }

        if(this._keys.A.isDown) {
            this._human?.play("humanRightLeft").setFlipX(true);
            let x = this._human!.x - 1;
            let y = this._human!.y;
            this._human!.setX(x);
        }

        if(this._keys.W.isDown) {
            this._human?.play("humanUp");
            let x = this._human!.x;
            let y = this._human!.y - 1;
            this._human!.setY(y);
        }
    }
}