import {Direction} from "./Direction";

export class Compass {
    getAngle360(dx: number, dy: number): number {
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        return 180 - (angle * -1);
    }

    getSegment(angle: number, amount: number): number {
        return Math.round(angle / (360 / amount));
    }

    getLength(dx: number, dy: number): number {
        return Math.sqrt(dx * dx + dy * dy);
    }

    getCardinalDirection(dx: number, dy: number): Direction {
        let angle = this.getAngle360(dx, dy);
        let segment = this.getSegment(angle, 8);

        switch(segment) {
            case 0: return Direction.W;
            case 1: return Direction.NW;
            case 2: return Direction.N;
            case 3: return Direction.NE;
            case 4: return Direction.E;
            case 5: return Direction.SE;
            case 6: return Direction.S;
            case 7: return Direction.SW;
            case 8: return Direction.W;
            default: return Direction.CENTER;
        }
    }
}