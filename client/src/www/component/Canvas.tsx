import React, {Component} from "react";
import * as Phaser from "phaser";
import {MapScene} from "../../game/scene/MapScene";
import {BootScene} from "../../game/scene/BootScene";
import {Game} from "phaser";
import {GameEntrypoint} from "../../game/GameEntrypoint";

/**
 * A components provides game scene
 */
export class Canvas extends Component {
    private _game: Game | undefined;

    private readonly _parent = "phaser-canvas";

    componentDidMount() {
       this._game = new GameEntrypoint(this._parent);
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