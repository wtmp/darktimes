import Phaser from "phaser";
import {Compass} from "../Compass";
import {Direction} from "../Direction";
import {PlayerContract} from "../module/player/PlayerContract";
import {ConsoleContract} from "../module/console/ConsoleContract";
import {PlayerPresenter} from "../module/player/PlayerPresenter";
import {ConsolePresenter} from "../module/console/ConsolePresenter";

export class Control extends Phaser.Scene implements PlayerContract.PlayerView,
    ConsoleContract.ConsoleView {

    private _compass: Compass = new Compass();

    private _playerPresenter: PlayerContract.PlayerPresenter = new PlayerPresenter(this);
    private _consolePresenter: ConsoleContract.ConsolePresenter = new ConsolePresenter(this);

    constructor() {
        super("Control");
    }

    displayPrompt(text: string): void {
        const con =
            this.children.getByName("console") as Phaser.GameObjects.Text;
        con.setText(text);
    }

    displayPromptText(text: string): void {
        const con =
            this.children.getByName("console") as Phaser.GameObjects.Text;
        con.setText(con.text + text);
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
            .setName("console")
            .setFontFamily("Helvetica")
            .setBackgroundColor("#000000")
            .setOrigin(0, 0)
            .setScrollFactor(0);

        let playerSprite = this.add.sprite(0, 0, "objects", 2241)
            .setName("player")
            .setScale(2)
            .setOrigin(0, 0);

        let playerName = this.add.text(this.cameras.main.width / 2 + 16,
            this.cameras.main.height / 2 - 16, "", {})
            .setName("playerName")
            .setOrigin(0.5, 0.5)
            .setScrollFactor(0);

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
        })

        this.anims.create({
            key: "player-move-sideway",
            frames: this.anims.generateFrameNumbers(
                "objects",
                {frames: [2244, 2245, 2246, 2244]}
            ),
            frameRate: 10,
            repeat: 0
        });

        this._playerPresenter.onMovement(Direction.CENTER);
        this._consolePresenter.onKeyPressed("");

        this.cameras.main.startFollow(playerSprite);
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
                this._consolePresenter.onKeyPressed(event.key);
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

                this._playerPresenter.onMovement(direction);
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

    displayPlayerName(name: string): void {
        const playerName =
            this.children.getByName("playerName") as Phaser.GameObjects.Text;
        playerName.setText(name);
    }

}