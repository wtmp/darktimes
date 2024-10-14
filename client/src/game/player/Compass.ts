import {Direction} from "./Direction";

export class Compass {
    private _sourceX: number = 0;
    private _sourceY: number = 0;
    private _targetX: number = 0;
    private _targetY: number = 0;

    setSource(x: number, y: number): void {
        this._targetX = x;
        this._targetY = y;
    }

    setTarget(x: number, y: number): void {
        this._sourceX = x;
        this._sourceY = y;
    }

    getCardinalDirection(): Direction {
        const dx = this._targetX - this._sourceX;
        const dy = this._targetY - this._sourceY;

        const radian = Math.atan2(dy, dx);
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = radian * (180 / Math.PI);

        if(length > 5) {
            if (angle > -22 && angle < 22) {
                return Direction.E;
            }

            if (angle > 22 && angle < 67) {
                return Direction.SE;
            }

            if (angle > 67 && angle < 113) {
                return Direction.S;
            }

            if (angle > 113 && angle < 157) {
                return Direction.SW;
            }

            if (angle > 157 && angle < 180) {
                return Direction.W;
            }

            if (angle > -180 && angle < -157) {
                return Direction.W;
            }

            if (angle > -157 && angle < -113) {
                return Direction.NW;
            }

            if (angle > -113 && angle < -67) {
                return Direction.N;
            }

            if (angle > -67 && angle < -22) {
                return Direction.NE;
            }
        }

        return Direction.CENTER;
    }
}