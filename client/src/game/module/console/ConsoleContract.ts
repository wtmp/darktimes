export namespace ConsoleContract {
    export interface ConsoleModel {
        setPrompt(text: string): void;
        getPrompt(): string;
        setText(text: string): void;
        getText(): string;
    }
    export interface ConsoleView {
        displayPrompt(text: string): void;
        displayPromptText(text: string): void;
    }
    export interface ConsolePresenter {
        onKeyPressed(key: string): void;
    }
}