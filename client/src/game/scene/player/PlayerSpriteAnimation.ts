import Sprite = Phaser.GameObjects.Sprite;

export interface PlayerSpriteAnimation {
    displayAnimation(sprite: Sprite, angle: number, flipX: boolean, flipY: boolean): void;
}