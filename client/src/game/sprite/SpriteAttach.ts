import {Scene} from "phaser";

export interface SpriteAttach {
    attach(scene: Scene, name: string): void;
}