import {Direction} from "./Direction";

export interface Movement {
    move(direction: Direction, speed: number): void;
}