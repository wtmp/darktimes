import {Scene} from "phaser";

export class GameBootScene extends Scene {

    constructor() {
        super("GameBootScene");
    }

    preload() : void {
        this.load.spritesheet("tiles", "./assets/blowharder.png", {
                frameWidth: 16,
                frameHeight: 16
            }
        );
    }

    create() : void {
        this.scene.start("GameMapScene");

        console.log("boot complete");
    }
}