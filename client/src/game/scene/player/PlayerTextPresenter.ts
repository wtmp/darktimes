import {PlayerTextView} from "./PlayerTextView";

export class PlayerTextPresenter {
    private _view: PlayerTextView;

    constructor(view: PlayerTextView) {
        this._view = view;
    }

    onPromptSay(text: string): void {
        this._view.displayText(text);

        setTimeout(() => {
            this._view.displayText("");
        }, 5000);
    }
}