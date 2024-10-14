import Phaser, {Game} from "phaser";
import {Boot} from "./scene/Boot";
import {MapScene} from "./scene/MapScene";
import {Control} from "./scene/Control";

export class GameEntrypoint extends Game {
    constructor(parent: string) {
        super(
            {
                type: Phaser.AUTO,
                width: window.innerWidth,
                height: window.innerHeight,
                pixelArt: true,
                parent: parent,
                scene: [
                    Boot,
                    MapScene,
                    Control
                ]
            }
        );
    }
}