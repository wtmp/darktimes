import {ConsoleContract} from "./ConsoleContract";
import {ConsoleModel} from "./ConsoleModel";

export class ConsolePresenter implements ConsoleContract.ConsolePresenter {
    private _view: ConsoleContract.ConsoleView;
    private _model: ConsoleContract.ConsoleModel = new ConsoleModel();

    constructor(view: ConsoleContract.ConsoleView) {
        this._view = view;
    }

    onKeyPressed(key: string): void {
        if(key.length === 1) {
            this._model.setText(this._model.getText() + key);
        } else {
            if(key === "Enter") {
                this._model.setText("");
            } else if(key === "Backspace") {
                this._model.setText(this._model.getText().substring(0, this._model.getText().length - 1))
            }
        }

        this._view.displayPrompt(this._model.getPrompt());
        this._view.displayPromptText(this._model.getText());
    }
}