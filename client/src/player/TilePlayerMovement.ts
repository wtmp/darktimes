import {PlayerMovement} from "./PlayerMovement";

export class TilePlayerMovement implements PlayerMovement {
    moveXY(x: number, y: number): boolean {
        throw new Error("Method not implemented.");
    }

    move(direction: string): boolean {
        return false;
    }
}