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

        EventBus.on('captcha-complete', (scene: Phaser.Scene) =>
        {
            console.log("captcha complete received")
            this.ngOnDestroy();
            // todo: complete form submission and route to home page after this
            console.log("component destroyed")
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