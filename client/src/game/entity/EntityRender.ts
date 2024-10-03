import {Entity} from "./Entity";

export interface EntityRender {
    render(sprite: Entity, x: number, y: number): void;
}