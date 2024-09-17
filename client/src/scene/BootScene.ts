import {Scene} from "phaser";

export class BootScene extends Scene {

    constructor() {
        super("BootScene");
    }

    preload() : void {
        this.load.spritesheet("tiles", "./assets/blowharder.png", {
                frameWidth: 16,
                frameHeight: 16
            }
        );
    }

    create() : void {
        console.log("boot complete");
        this.scene.start("GameScene");
    }
}