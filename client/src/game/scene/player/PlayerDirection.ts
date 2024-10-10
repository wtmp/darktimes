export class PlayerDirection {
    detect(x: number, y: number, x1: number, y1: number): string {
        const dx = x1 - (x + 16);
        const dy = y1 - (y + 16);
        const length = Math.sqrt(dx * dx + dy * dy);

        if(length > 5) {
            const radian = Math.atan2(y1 - (y + 16), x1 - (x + 16));
            const angle = radian * (180 / Math.PI);

            if (angle > -22 && angle < 22) {
                return "6"
            }

            if (angle > 22 && angle < 67) {
                return "3"
            }

            if (angle > 67 && angle < 113) {
                return "2"
            }

            if (angle > 113 && angle < 157) {
                return "1"
            }

            if (angle > 157 && angle < 180) {
                return "4"
            }

            if (angle > -180 && angle < -157) {
                return "4"
            }

            if (angle > -157 && angle < -113) {
                return "7"
            }

            if (angle > -113 && angle < -67) {
                return "8"
            }

            if (angle > -67 && angle < -22) {
                return "9"
            }
        }

        return "0";
    }
}