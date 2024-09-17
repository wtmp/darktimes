export interface PlayerMovement {
    move(direction: string): boolean;

    moveXY(x: number, y: number): boolean;
}