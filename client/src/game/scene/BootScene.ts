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
            .text(this.game.canvas.width / 2, this.game.canvas.height / 2, "start game")
            .setInteractive()
            .on(Phaser.Input.Events.POINTER_DOWN, () => {
                console.log("start game");
                this.scene.start("MapScene");
        });

        console.log("boot complete");
    }
}