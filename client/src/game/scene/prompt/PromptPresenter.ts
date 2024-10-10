import {PromptView} from "./PromptView";
import {PromptEvents} from "./PromptEvents";
import {EventBus} from "../../event/EventBus";

export class PromptPresenter {
    private _view: PromptView;

    constructor(view: PromptView) {
        this._view = view;
    }

    handleKey(key: string, text: string) {
        const pattern: RegExp = /[ .,!?1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]/;

        switch (key) {
            case "Enter":
                const sub = text.substring(2, text.length);
                EventBus.emit(PromptEvents.PromptSay, sub);
                this._view.displayPrompt("> ");
                break;
            case "Backspace":
                if(text.length > 2) {
                    this._view.displayPrompt(text.substring(0, text.length - 1));
                }
                break;
            default:
                if (key.length === 1) {
                    if (pattern.test(key)) {
                        this._view.displayPrompt(text + key);
                    }
                }
                break;
        }
    }
}