import React, {Component} from "react";
import * as Phaser from "phaser";
import {Game} from "phaser";
import {GameScene} from "../scene/GameScene";
import {BootScene} from "../scene/BootScene";

/**
 * A components provides game scene
 */
export class GameCanvas extends Component {
    private _game!:Game;

    private readonly _parent = "phaser-canvas";

    componentDidMount() {
        this._game = new Game({
            type: Phaser.AUTO,
            width: 400,
            height: 400,
            pixelArt: true,
            parent: this._parent,
            scene: [BootScene, GameScene]
        });
    }

    componentWillUnmount() {
        if(this._game) {
            this._game.destroy(true);
        }
    }

    render() {
        return <div id={this._parent}></div>;
    }
}