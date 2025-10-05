import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class Complete extends Scene
{
    title: GameObjects.Text;

    constructor ()
    {
        super('Complete');
    }

    create() 
    {
        console.log('Completed Captcha');
        EventBus.emit('captcha-complete');
    }
}