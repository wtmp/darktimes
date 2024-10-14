import {PlayerSpriteView} from "./PlayerSpriteView";

export class PlayerSpritePresenter {
    private _view: PlayerSpriteView;

    constructor(view: PlayerSpriteView) {
        this._view = view;
    }
}