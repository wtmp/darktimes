import Phaser from "phaser";
import {Compass} from "../module/player/Compass";
import {PlayerContract} from "../module/player/PlayerContract";
import {Direction} from "../module/player/Direction";
import {PlayerPresenter} from "../module/player/PlayerPresenter";

export class Control extends Phaser.Scene implements PlayerContract.PlayerView {
    private _compass: Compass = new Compass();

    private _playerPresenter: PlayerContract.PlayerPresenter = new PlayerPresenter(this);

    constructor() {
        super("Control");
    }

    preload(): void {
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

        let promptSprite = this.add.text(10,10, "Console> ")
            .setName("prompt")
            .setFontFamily("Helvetica")
            .setBackgroundColor("#000000")
            .setOrigin(0, 0)
            .setScrollFactor(0);

        let playerSprite = this.add.sprite(0, 0, "objects", 2241)
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

        this._playerPresenter.onRightClick(Direction.CENTER);

        this.cameras.main.startFollow(playerSprite);
        // this.add.text(100, 100, "Helvetica", {fontFamily: "Helvetica", fontSize: 28});
        // this.add.text(100, 150, "Times New Roman", {fontFamily: "Times New Roman", fontSize: 28});
        // this.add.text(100, 200, "Verdana", {fontFamily: "Verdana", fontSize: 28});
        // this.add.text(100, 250, "Palatino", {fontFamily: "Palatino", fontSize: 28});
    }

    create(): void {
        this.input.setDefaultCursor("default");

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
                let dx = this.input.mousePointer.x - (this.cameras.main.width / 2 + 16);
                let dy = this.input.mousePointer.y - (this.cameras.main.height / 2 + 16);

                let direction = this._compass.getCardinalDirection(dx, dy);

                this._playerPresenter.onRightClick(direction);
            }
        }
    }

    displayPlayer(x: number, y: number): void {
        const player =
            this.children.getByName("player") as Phaser.GameObjects.Sprite;
        player.setX(x);
        player.setY(y);
    }

    displayPlayerMove(dx: number, dy: number): void {
        const player =
            this.children.getByName("player") as Phaser.GameObjects.Sprite;
        player.setX(player.x + dx);
        player.setY(player.y + dy);
    }

    displayPlayerMoveAnimation(direction: Direction): void {
        const player =
            this.children.getByName("player") as Phaser.GameObjects.Sprite;

        switch (direction) {
            case Direction.E:
                player.play("player-move-sideway", true)
                    .setFlipX(false)
                    .setAngle(0);
                break;
            case Direction.W:
                player.play("player-move-sideway", true)
                    .setFlipX(true)
                    .setAngle(0);
                break;
            case Direction.N:
                player.play("player-move-up", true)
                    .setAngle(0);
                break;
            case Direction.S:
                player.play("player-move-down", true)
                    .setAngle(0);
                break;
            case Direction.SW:
                player.play("player-move-down", true)
                    .setAngle(-7);
                break;
            case Direction.SE:
                player.play("player-move-down", true)
                    .setAngle(7);
                break;
            case Direction.NW:
                player.play("player-move-up", true)
                    .setAngle(-7);
                break;
            case Direction.NE:
                player.play("player-move-up", true)
                    .setAngle(7);
                break;
        }
    }
}