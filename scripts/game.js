import {Captcha} from './scenes/captcha_scene.js';
import {Title} from './scenes/title_scene.js';

const config = {
    type: Phaser.AUTO,
    parent: "captcha",
    width: 400,
    height: 300,
    backgroundColor: '#FFFFFF',
    scene: [ Title, Captcha],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};

const game = new Phaser.Game(config);