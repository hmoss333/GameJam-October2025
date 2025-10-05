import { Turnstile } from './scenes/Turnstile';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { Captcha } from './scenes/Captcha';
import { GoldenSpiral } from './Captchas/GoldenSpiral';
import { NameObject } from './Captchas/NameObject';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 512,//1024,
    height: 384,//768,
    parent: 'app-captcha',
    backgroundColor: '#FFFFFF',
    dom: {
        createContainer: true
    },
    scene: [
        Preloader,
        Turnstile,
        Captcha,
        GoldenSpiral,
        NameObject,
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
