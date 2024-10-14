import {Scene} from "phaser";

export class Boot extends Scene {

    constructor() {
        super("Boot");
    }

    preload() : void {
        this.load.spritesheet("objects", "./assets/blowharder.png", {
                frameWidth: 16,
                frameHeight: 16
            }
        );
    }

    create() : void {
        this.scene.start("Control");
    }
}