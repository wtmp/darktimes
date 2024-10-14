import {Scene} from "phaser";
import {PromptText} from "./prompt/PromptText";
import {PlayerSprite} from "./player/PlayerSprite";
import {PlayerText} from "./player/PlayerText";
import {Movement} from "./player/movement/Movement";
import {PlayerUtils} from "./player/PlayerUtils";
import {MovementAnimation} from "./player/movement/MovementAnimation";

export class MapScene extends Scene {
    private _player!: PlayerSprite;
    private _movement!: Movement;
    private _movementAnimation!: MovementAnimation;

    constructor() {
        super("MapScene");
    }

    create(): void {
        this.add.text(50, 50, "DARK TIMES");

        if(this.input.mouse) {
            this.input.mouse.disableContextMenu();
        }

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

        this._player = new PlayerSprite(this, 0, 0);

        new PromptText(this);
        new PlayerText(this);

        this._movement = new Movement(this._player);

        this.cameras.main.startFollow(this._player);
    }

    update(time: number, delta: number) {
        super.update(time, delta);

        const mouse = this.input.mousePointer;

        if(mouse.rightButtonReleased()) {
            // this._movementAnimation.stop();
        }

        if(mouse.rightButtonDown()) {
            const centerX = this.cameras.main.width / 2;
            const centerY = this.cameras.main.height / 2;

            const direction = PlayerUtils.detectDirection(centerX, centerY, mouse.x, mouse.y);

            this._movement.onMovement(direction);
            this._movementAnimation.onMovement(direction);
        }
    }
}