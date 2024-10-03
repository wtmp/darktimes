import * as Phaser from "phaser";
import {Scene} from "phaser";
import Ellipse = Phaser.GameObjects.Ellipse;
import Text = Phaser.GameObjects.Text;
import Sprite = Phaser.GameObjects.Sprite;
import {Game} from "../game/Game";
import {Server} from "../game/server/Server";

export class GameScene extends Scene {
    private _scale: integer = 0;
    private _keys: any;

    private _ellipse!: Ellipse;
    private _text!: Text;

    private _x: integer = 0;
    private _y: integer = 0;

    private _dx: integer = 0;
    private _dy: integer = 0;



    private _human?: Sprite;

    //private _connection : PlayerConnection | undefined;

    constructor() {
        super("GameScene");
    }

    get human(): Phaser.GameObjects.Sprite | any {
        return this._human;
    }

    set human(value: Phaser.GameObjects.Sprite) {
        this._human = value;
    }

    preload(): void {
        const start = 19 * 116 + 37;

        this.anims.create({
            key: "humanDown",
            frames: this.anims.generateFrameNumbers("tiles", {frames: [start, start + 1, start + 2, start]}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "humanUp",
            frames: this.anims.generateFrameNumbers("tiles", {frames: [start + 6, start + 7, start + 8, start + 6]}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "humanRightLeft",
            frames: this.anims.generateFrameNumbers("tiles", {frames: [start + 3, start + 4, start + 5, start + 3]}),
            frameRate: 10,
            repeat: 0
        });

        //this._connection = new PlayerConnection("ws://localhost:3000");
    }

    create(): void {
        this._text = this.add.text(50, 50, "DARK TIMES");

        // for(let y=0; y<13; y++) {
        //     for(let x = 0; x<13; x++) {
        //         this.add.entity(x * 32, y * 32, "tiles", start + 32).setOrigin(0, 0).scale = 2;
        //     }
        // }

        let tilesMap = [
            1730, 23 * 116 + 70, 0, 0, 3, 3,
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

        if (layer) {
            layer.setScale(2);
        }

        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                map.putTileAt(tilesMap[Math.floor(Math.random() * 5) * 5 + Math.floor(Math.random() * 5)], x, y, false, layer!);
            }
        }

        const start = 19 * 116 + 37;

        this._human = this.add.sprite(6 * 32, 6 * 32, "tiles", start);
        this._human.setOrigin(0, 0);
        this._human.scale = 2;


        // this._human.setInteractive();
        // this.input.setDraggable(this._human);
        // this.input.on("drag", (pointer: any, gameObject: Sprite, dragX: number, dragY: number) => {
        //     this._human?.setX(dragX);
        //     this._human?.setY(dragY);
        // })

        this.cameras.main.startFollow(this._human);

        new Game(new Server("huy123"), this);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        if (this.input.mousePointer.leftButtonReleased()) {
            this.human.setAngle(0);
        }

        if (this.input.mousePointer.isDown) {
            var offsetX = this.input.mousePointer.x;
            var offsetY = this.input.mousePointer.y;

            if (offsetY < 200) {
                if (offsetX < 200) {
                    console.log("7");
                    this._human?.play("humanUp", true).setAngle(-7);
                    let x = this._human!.x - 1;
                    let y = this._human!.y - 1;
                    this._human!.setY(y);
                    this._human!.setX(x);
                } else if (offsetX > 200 && offsetX < 240) {
                    console.log("8");
                    this._human?.play("humanUp", true).setAngle(0);
                    let x = this._human!.x;
                    let y = this._human!.y - 1;
                    this._human!.setY(y);
                    this._human!.setX(x);
                } else if (offsetX > 240) {
                    console.log("9");
                    this._human?.play("humanUp", true).setAngle(7);
                    let x = this._human!.x + 1;
                    let y = this._human!.y - 1;
                    this._human!.setY(y);
                    this._human!.setX(x);
                }
            } else if (offsetY > 200 && offsetY < 240) {
                if (offsetX < 200) {
                    console.log("4");
                    this._human?.play("humanRightLeft", true).setFlipX(true).setAngle(0);
                    let x = this._human!.x - 1;
                    let y = this._human!.y;
                    this._human!.setY(y);
                    this._human!.setX(x);
                } else if (offsetX > 200 && offsetX < 240) {
                    console.log("5");
                } else if (offsetX > 240) {
                    console.log("6");
                    this._human?.play("humanRightLeft", true).setFlipX(false).setAngle(0);
                    let x = this._human!.x + 1;
                    let y = this._human!.y;
                    this._human!.setY(y);
                    this._human!.setX(x);
                }
            } else if (offsetY > 240) {
                if (offsetX < 200) {
                    console.log("1");
                    this._human?.play("humanDown", true).setAngle(-7);
                    let x = this._human!.x - 1;
                    let y = this._human!.y + 1;
                    this._human!.setY(y);
                    this._human!.setX(x);
                } else if (offsetX > 200 && offsetX < 240) {
                    console.log("2");
                    this._human?.play("humanDown", true).setAngle(0);
                    let x = this._human!.x;
                    let y = this._human!.y + 1;
                    this._human!.setY(y);
                    this._human!.setX(x);
                } else if (offsetX > 240) {
                    console.log("3");
                    this._human?.play("humanDown", true).setAngle(7);
                    let x = this._human!.x + 1;
                    let y = this._human!.y + 1;
                    this._human!.setY(y);
                    this._human!.setX(x);
                }
            }
        }
    }
}