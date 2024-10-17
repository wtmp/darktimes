import Phaser from "phaser";
import {Direction} from "../player/Direction";
import {Compass} from "../player/Compass";

export class Control extends Phaser.Scene {
    private _compass: Compass = new Compass();

    private  _centerX: number = 0;
    private  _centerY: number = 0;

    constructor() {
        super("Control");
    }

    preload(): void {
        this._centerX = this.game.canvas.width / 2;
        this._centerY = this.game.canvas.height / 2;

        let map = this.make.tilemap({
            width: 800,
            height: 600,
            tileHeight: 16,
            tileWidth: 16
        });

        let tileset = map.addTilesetImage("objects");

        const layer = map.createBlankLayer("Background", tileset!);

        if(layer) {
            layer.randomize(0, 0, 800, 600,
                [761, 761, 761, 761, 1345, 994, 878, 997, 997,
                    880, 764, 881, 881, 1577, 1691, 1693, 1461]);
        }

        if (layer) {
            layer.setScale(2);
        }

        layer?.putTileAt(762, 0, 0, false);

        this.add.text(10,10, "Console> ")
            .setName("prompt")
            .setFontFamily("Helvetica")
            .setBackgroundColor("#000000")
            .setOrigin(0, 0)
            .setScrollFactor(0);

        this.add.sprite(this._centerX, this._centerY, "objects", 2241)
            .setName("player")
            .setScale(2)
            .setOrigin(0, 0);

        this.anims.create({
            key: "player-move-down",
            frames: this.anims.generateFrameNumbers(
                "objects",
                {frames: [2241, 2242, 2243, 2241]}
            ),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "player-move-up",
            frames: this.anims.generateFrameNumbers(
                "objects",
                {frames: [2247, 2248, 2249, 2247]}
            ),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: "player-move-sideway",
            frames: this.anims.generateFrameNumbers(
                "objects",
                {frames: [2244, 2245, 2246, 2244]}
            ),
            frameRate: 10,
            repeat: 0
        });

        const player =
            this.children.getByName("player") as Phaser.GameObjects.Sprite;

        this.cameras.main.startFollow(player);
        // this.add.text(100, 100, "Helvetica", {fontFamily: "Helvetica", fontSize: 28});
        // this.add.text(100, 150, "Times New Roman", {fontFamily: "Times New Roman", fontSize: 28});
        // this.add.text(100, 200, "Verdana", {fontFamily: "Verdana", fontSize: 28});
        // this.add.text(100, 250, "Palatino", {fontFamily: "Palatino", fontSize: 28});

        //this.cameras.main.startFollow(player);
    }

    create(): void {
        if(this.input.mouse) {
            this.input.mouse.disableContextMenu();
        } else {
            throw new Error("Failed to disable context menu.");
        }

        if(this.input.keyboard) {
            this.input.keyboard.on(Phaser.Input.Keyboard.Events.ANY_KEY_DOWN, (event: KeyboardEvent) => {
                console.log(event);
            });
        } else {
            throw new Error("Failed to initialize keyboard events.");
        }
    }

    update(): void {
        if(this.input.mousePointer) {
            if(this.input.mousePointer.rightButtonDown()) {
                let dx = this.input.mousePointer.x - (this._centerX + 16);
                let dy = this.input.mousePointer.y - (this._centerY + 16);

                let direction = this._compass.getCardinalDirection(dx, dy);

                this.displayMovement(direction, 1);
            }
        }
    }

    displayMovement(direction: Direction, speed: number): void {
        const player =
            this.children.getByName("player") as Phaser.GameObjects.Sprite;

        switch (direction) {
            case Direction.E:
                player.play("player-move-sideway", true)
                    .setFlipX(false)
                    .setAngle(0);
                player.setX(player.x + 1);
                break;
            case Direction.W:
                player.play("player-move-sideway", true)
                    .setFlipX(true)
                    .setAngle(0);
                player.setX(player.x - 1);
                break;
            case Direction.N:
                player.play("player-move-up", true)
                    .setAngle(0);
                player.setY(player.y - 1);
                break;
            case Direction.S:
                player.play("player-move-down", true)
                    .setAngle(0);
                player.setY(player.y + 1);
                break;
            case Direction.SW:
                player.play("player-move-down", true)
                    .setAngle(-7);
                player.setX(player.x - 1);
                player.setY(player.y + 1);
                break;
            case Direction.SE:
                player.play("player-move-down", true)
                    .setAngle(7);
                player.setX(player.x + 1);
                player.setY(player.y + 1);
                break;
            case Direction.NW:
                player.play("player-move-up", true)
                    .setAngle(-7);
                player.setX(player.x - 1);
                player.setY(player.y - 1);
                break;
            case Direction.NE:
                player.play("player-move-up", true)
                    .setAngle(7);
                player.setX(player.x + 1);
                player.setY(player.y - 1);
                break;
        }
    }
}