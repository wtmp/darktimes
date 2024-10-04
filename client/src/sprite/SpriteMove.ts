import {Scene} from "phaser";

export interface SpriteMove {
    move(scene: Scene, name: string, x: number, y: number): void;
}