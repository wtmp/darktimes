import Phaser, {Scene} from "phaser";
import {PromptView} from "./PromptView";
import {PromptPresenter} from "./PromptPresenter";

export class PromptText extends Phaser.GameObjects.Text implements PromptView {
    private _presenter: PromptPresenter;

    constructor(scene: Scene) {
        super(scene, 5, scene.game.canvas.height - 25, "> ", {});

        this._presenter = new PromptPresenter(this);

        scene.add.existing(this);

        this.setScrollFactor(0);

        this.setBackgroundColor('#FFFFFF');
        this.setColor('#000000');
        this.setFont("Arial");
        this.setSize(8, 8);

        scene.input.keyboard?.on(Phaser.Input.Keyboard.Events.ANY_KEY_DOWN, (event: KeyboardEvent) => {
            this._presenter.handleKey(event.key, this.text);
        });
    }

    displayPrompt(text: string): void {
        this.text = text;
    }
}