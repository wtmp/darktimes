import {Direction} from "./Direction";

export interface MovementView {
    displayMovement(direction: Direction): void;
}