import {PlayerSpriteAnimation} from "../PlayerSpriteAnimation";
import Phaser, {Scene} from "phaser";

export class MoveSidewayAnimation implements PlayerSpriteAnimation {
    static readonly ANIM_NAME = "player_sideway";

    constructor(scene: Scene) {
        const sprites = [2244, 2245, 2246, 2244];

        scene.anims.create({
            key: MoveSidewayAnimation.ANIM_NAME,
            frames: scene.anims.generateFrameNumbers("tiles", {frames: sprites}),
            frameRate: 10,
            repeat: 0
        });
    }

    displayAnimation(sprite: Phaser.GameObjects.Sprite, angle: number, flipX: boolean, flipY: boolean): void {
        if(sprite) {
            sprite.play(MoveSidewayAnimation.ANIM_NAME,true)
                .setAngle(angle)
                .setFlipX(flipX)
                .setFlipY(flipY);
        }
    }
}