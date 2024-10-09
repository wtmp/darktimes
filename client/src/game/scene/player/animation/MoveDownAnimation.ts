import {PlayerAnimation} from "../PlayerAnimation";
import Phaser, {Scene} from "phaser";

export class MoveDownAnimation implements PlayerAnimation {
    static readonly ANIM_NAME = "player_down";

    constructor(scene: Scene) {
        const sprites = [2241, 2242, 2243, 2241];

        scene.anims.create({
            key: MoveDownAnimation.ANIM_NAME,
            frames: scene.anims.generateFrameNumbers("tiles", {frames: sprites}),
            frameRate: 10,
            repeat: 0
        });
    }

    displayAnimation(sprite: Phaser.GameObjects.Sprite, angle: number, flipX: boolean, flipY: boolean): void {
        if(sprite) {
            sprite.play(MoveDownAnimation.ANIM_NAME, true)
                .setAngle(angle)
                .setFlipX(flipX)
                .setFlipY(flipY);
        }
    }
}