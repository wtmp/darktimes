import { Game } from "phaser";
import React, { Component, ReactNode } from "react";
import * as Phaser from "phaser";
import {MapScene} from "./scenes/MapScene";

export class Darktimes extends Component {

    private _gameContainerRef: React.RefObject<HTMLDivElement>;
    private _game!: Game;

    constructor(props:any) {
        super(props);
        this._gameContainerRef = React.createRef<HTMLDivElement>();
    }

    componentDidMount() {
        this._game = new Game({
            width: 300,
            height: 300,
            type: Phaser.AUTO,
            scene: [
                MapScene
            ]
        });
    }

    componentWillUnmount() {
        if(this._game) {
            this._game.destroy(true);
        }
    }

    render(): ReactNode {
        return <div ref={this._gameContainerRef}></div>;
    }
}