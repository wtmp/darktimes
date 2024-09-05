import "./Darktimes.css"
import React, {Component} from "react";
import {Canvas} from "./Canvas";

/**
 *
 */
export class Darktimes extends Component {
    render() {
        return <div>
                <div className="Darktimes-header">
                    <Canvas />
                </div>
               </div>
        ;
    }
}