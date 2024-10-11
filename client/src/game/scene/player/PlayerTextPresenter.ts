import {PlayerTextView} from "./PlayerTextView";

export class PlayerTextPresenter {
    private _view: PlayerTextView;

    constructor(view: PlayerTextView) {
        this._view = view;
    }

    private _textArray: string[] = new Array<string>();

    onPlayerSay(text: string): void {
        this._textArray.push(text);
        this._view.displayText(this._textArray);

        setTimeout(() => {
            this._textArray.shift();
            this._view.displayText(this._textArray);
        }, 5000);
    }
}