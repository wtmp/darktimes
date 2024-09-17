import "./Darktimes.css"
import React, {Component} from "react";
import {GameCanvas} from "./GameCanvas";

/**
 *
 */
export class Darktimes extends Component {
    render() {
        return <div>
                <div className="Darktimes-header">
                    <GameCanvas />
                </div>
               </div>
        ;
    }
}