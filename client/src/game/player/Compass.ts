import {Direction} from "./Direction";

export interface Compass {
    getCardinalDirection(dx: number, dy: number): Direction;
}