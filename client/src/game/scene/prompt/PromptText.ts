import Phaser from "phaser";
import {PromptView} from "./PromptView";
import {PromptPresenter} from "./PromptPresenter";

export class PromptText extends Phaser.GameObjects.Text implements PromptView {
    private _presenter: PromptPresenter;

    constructor(scene: Phaser.Scene) {
        super(scene, 5, scene.game.canvas.height - 25, ">", {});

        this._presenter = new PromptPresenter(this);

        scene.add.existing(this);

        scene.input.keyboard?.on(Phaser.Input.Keyboard.Events.ANY_KEY_DOWN, (event: KeyboardEvent) => {
            this._presenter.handleKey(event.key, this.text);
        });
    }

    displayPrompt(text: string): void {
        this.text = text;
    }
}