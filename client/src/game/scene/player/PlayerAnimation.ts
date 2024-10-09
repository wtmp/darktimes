import Sprite = Phaser.GameObjects.Sprite;

export interface PlayerAnimation {
    displayAnimation(sprite: Sprite, angle: number, flipX: boolean, flipY: boolean): void;
}