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

        this.add
            .text(160, 200, "start game")
            .setInteractive()
            .on(Phaser.Input.Events.POINTER_DOWN, () => {
                console.log("start game");
                this.scene.start("MapScene");
        });

        console.log("boot complete");
    }
}