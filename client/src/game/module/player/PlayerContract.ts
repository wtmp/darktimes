import { Direction } from "../../Direction";

export namespace PlayerContract {
    export interface PlayerModel {
        getPlayerX(): number;
        getPlayerY(): number;
        getPlayerName(): string;
        movePlayer(dx: number, dy: number): void;
    }

    export interface PlayerView {
        displayPlayer(x: number, y: number): void;
        displayPlayerMove(dx: number, dy: number): void;
        displayPlayerMoveAnimation(direction: Direction): void;
        displayPlayerName(name: string): void;
    }

    export interface PlayerPresenter {
        onMovement(direction: Direction): void;
        onPlayerClick(): void;
    }
}