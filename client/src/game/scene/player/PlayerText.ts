import Phaser from "phaser";
import {PlayerTextView} from "./PlayerTextView";
import {PlayerTextPresenter} from "./PlayerTextPresenter";
import {EventBus} from "../../event/EventBus";
import {PromptEvents} from "../prompt/PromptEvents";

export class PlayerText extends Phaser.GameObjects.Text implements PlayerTextView {
    private _presenter: PlayerTextPresenter;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, scene.game.canvas.width / 2,
            (scene.game.canvas.height / 2) - 30, "", {});

        scene.add.existing(this);

        this.setOrigin(0 , 0);
        this.setScrollFactor(0);

        this._presenter = new PlayerTextPresenter(this);

        EventBus.on(PromptEvents.PromptSay, (text: string) => {
            this._presenter.onPromptSay(text);
        });
    }

    displayText(text: string): void {
        this.text = text;
    }
}