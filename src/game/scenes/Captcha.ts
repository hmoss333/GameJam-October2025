import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class Captcha extends Scene
{
    title: GameObjects.Text;

    constructor ()
    {
        super('Captcha');
    }

    create ()
    {
        this.title = this.add.text(60, 220, 'Input the text shown...', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#000000',
            stroke: '#000000', strokeThickness: 1,
            align: 'left'
        }).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }

}
