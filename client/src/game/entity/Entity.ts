import Sprite = Phaser.GameObjects.Sprite;
import * as Phaser from "phaser";

export class Entity {
    private _name!: string;
    private _key!: number;
    private _sprite: Sprite | undefined;

    constructor(name: string, key: number) {
        this._name = name;
        this._key = key;
    }

    get name(): string {
        return this._name;
    }

    get key(): number {
        return this._key;
    }

    set sprite(value: Phaser.GameObjects.Sprite | undefined) {
        this._sprite = value;
    }
}