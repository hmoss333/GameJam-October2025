import { Component, OnInit } from "@angular/core";
import Phaser from "phaser";
import StartGame from "../../../game/main";
import { EventBus } from "../../../game/EventBus";

@Component({
  selector: 'app-phaser-captcha',
    templateUrl: './phaser-captcha.component.html',
    standalone: true,
})
export class PhaserCaptchaComponent implements OnInit
{
    scene: Phaser.Scene;
    game: Phaser.Game;
    sceneCallback: (scene: Phaser.Scene) => void;

    ngOnInit ()
    {
        this.game = StartGame('game-container');

        EventBus.on('current-scene-ready', (scene: Phaser.Scene) =>
        {
            console.log("event emitter callback reached");
            this.scene = scene;

            if (this.sceneCallback)
            {
                this.sceneCallback(scene);
            }
        });
    }

    ngOnDestroy ()
    {
        if (this.game)
        {
            this.game.destroy(true);
        }
    }
}