import { Turnstile } from './scenes/Turnstile';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { Captcha } from './scenes/Captcha';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'app-captcha',
    backgroundColor: '#FFFFFF',
    scene: [
        Preloader,
        Turnstile,
        Captcha,
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
