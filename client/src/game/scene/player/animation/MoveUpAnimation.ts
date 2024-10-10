import {PlayerSpriteAnimation} from "../PlayerSpriteAnimation";
import Phaser, {Scene} from "phaser";

export class MoveUpAnimation implements PlayerSpriteAnimation {
    static readonly ANIM_NAME = "player_up";

    constructor(scene: Scene) {
        const sprites = [2247, 2248, 2249, 2247];

        scene.anims.create({
            key: MoveUpAnimation.ANIM_NAME,
            frames: scene.anims.generateFrameNumbers("tiles", {frames: sprites}),
            frameRate: 10,
            repeat: 0
        });
    }

    displayAnimation(sprite: Phaser.GameObjects.Sprite, angle: number, flipX: boolean, flipY: boolean): void {
        if(sprite) {
            sprite.play(MoveUpAnimation.ANIM_NAME, true)
                .setAngle(angle)
                .setFlipX(flipX)
                .setFlipY(flipY);
        }
    }
}