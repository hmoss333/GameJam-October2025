import {Example} from './scenes/example_scene.js';
import {Title} from './scenes/title_scene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Title, Example],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    dom: {
    createContainer: true
    }
};

const game = new Phaser.Game(config);