import Phaser from "phaser";
import {Player} from "../player/Player";
import {MovementView} from "../player/MovementView";
import {Direction} from "../player/Direction";
import {MovementPresenter} from "../player/MovementPresenter";

export class Control extends Phaser.Scene implements MovementView {
    private _player = new Player();
    private _movementPresenter: MovementPresenter = new MovementPresenter(this);

    private  _centerX: number = 0;
    private  _centerY: number = 0;

    constructor() {
        super("Control");
    }

    preload(): void {
        this._centerX = this.game.canvas.width / 2;
        this._centerY = this.game.canvas.height / 2;

        this.add.text(10,10, "> ")
            .setName("prompt")
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
    }

    create(): void {
        this.displayMovement(Direction.SW);

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
                this._movementPresenter.move(this._centerX,
                    this._centerY,
                    this.input.mousePointer.x,
                    this.input.mousePointer.y
                );
            }
            if(this.input.mousePointer.rightButtonReleased()) {
            }
        }
    }

    displayMovement(direction: Direction): void {
        const player =
            this.children.getByName("player") as Phaser.GameObjects.Sprite;

        console.log(direction);

        switch (direction) {
            case Direction.E:
                player.play("player-move-sideway", true)
                    .setFlipX(false);
                break;
            case Direction.W:
                player.play("player-move-sideway", true)
                    .setFlipX(true);
                break;
            case Direction.N:
                player.play("player-move-up", true);
                break;
            case Direction.S:
                player.play("player-move-down", true);
                break;
            case Direction.SW:
                player.play("player-move-down", true).setAngle(-7);
                break;
            case Direction.SE:
                player.play("player-move-down", true).setAngle(7);
                break;
            case Direction.NW:
                player.play("player-move-up", true).setAngle(-7);
                break;
            case Direction.NE:
                player.play("player-move-up", true).setAngle(7);
                break;
        }
    }
}