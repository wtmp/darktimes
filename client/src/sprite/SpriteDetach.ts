import {Scene} from "phaser";

export interface SpriteDetach {
    detach(scene: Scene, name: string): void;
}