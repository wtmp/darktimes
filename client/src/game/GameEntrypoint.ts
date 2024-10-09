import Phaser, {Game} from "phaser";
import {BootScene} from "./scene/BootScene";
import {MapScene} from "./scene/MapScene";

export class GameEntrypoint extends Game {
    constructor(parent: string) {
        super(
            {
                type: Phaser.AUTO,
                width: 400,
                height: 400,
                pixelArt: true,
                parent: parent,
                scene: [
                    BootScene,
                    MapScene
                ]
            }
        );
    }
}