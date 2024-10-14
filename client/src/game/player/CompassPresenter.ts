import {Direction} from "./Direction";
import {Compass} from "./Compass";

export class CompassPresenter implements Compass {
    getCardinalDirection(dx: number, dy: number): Direction {
        const radian = Math.atan2(dy, dx);
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = radian * (180 / Math.PI);

        console.log(length);

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