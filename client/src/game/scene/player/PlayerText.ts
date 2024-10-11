import Phaser from "phaser";
import {PlayerTextView} from "./PlayerTextView";
import {PlayerTextPresenter} from "./PlayerTextPresenter";
import {EventBus} from "../../event/EventBus";
import {PromptEvents} from "../prompt/PromptEvents";

export class PlayerText extends Phaser.GameObjects.Text implements PlayerTextView {
    private _presenter: PlayerTextPresenter;

    constructor(scene: Phaser.Scene) {
        super(scene, scene.game.canvas.width / 2,
            (scene.game.canvas.height / 2),
            "",
            {wordWrap: {width: 200, useAdvancedWrap: true}});

        scene.add.existing(this);

        this.setOrigin(0, 0);
        this.setScrollFactor(0);
        this.setColor("#00FF00");
        this.setFontStyle("bold");

        this._presenter = new PlayerTextPresenter(this);

        EventBus.on(PromptEvents.PromptSay, (text: string) => {
            this._presenter.onPlayerSay(text);
        });
    }

    displayText(array: string[]): void {
        this.text = array.join("\n");
        this.setY((this.scene.game.canvas.height / 2) - this.height);
    }
}