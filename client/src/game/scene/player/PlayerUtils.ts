export class PlayerUtils {
    static detectDirection(sourceX: number, sourceY: number, targetX: number, targetY: number): string {
        const dx = targetX - (sourceX + 16);
        const dy = targetY - (sourceY + 16);
        const length = Math.sqrt(dx * dx + dy * dy);

        if(length > 5) {
            const radian = Math.atan2(targetY - (sourceY + 16), targetX - (sourceX + 16));
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