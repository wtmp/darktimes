import {Scene} from "phaser";
import {PromptText} from "./prompt/PromptText";
import {PlayerSprite} from "./player/PlayerSprite";
import EventEmitter = Phaser.Events.EventEmitter;

export class MapScene extends Scene {
    private _emitter!: EventEmitter;
    private _player!: PlayerSprite;
    private _prompt!: PromptText;

    constructor() {
        super("MapScene");
    }

    create(): void {
        this._emitter = new Phaser.Events.EventEmitter();

        this.add.text(50, 50, "DARK TIMES");

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

        this._prompt = new PromptText(this).setScrollFactor(0);

        this._player = new PlayerSprite(this, this.cameras.main.width / 2,
            this.cameras.main.height / 2);

        this.cameras.main.startFollow(this._player);
    }

    update(time: number, delta: number) {
        super.update(time, delta);

        this._player.update(time, delta);
    }
}