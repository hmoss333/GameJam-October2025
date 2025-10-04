import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class Turnstile extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    logoTween: Phaser.Tweens.Tween | null;

    constructor ()
    {
        super('Turnstile');
    }

    create ()
    {
        this.logo = this.add.image(530, 220, 'gatekeep_img');
        this.logo.scale = .2;
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x000000 }, fillStyle: { color: 0xff0000 }});

        const rect = new Phaser.Geom.Rectangle(10, 220, 40, 40);

        //  The green rectangle is the original one
        graphics.strokeRectShape(rect);

        this.input.on('pointerup', () => {
            this.changeScene();
        });

        this.title = this.add.text(60, 220, 'Verify you are human', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#000000',
            stroke: '#000000', strokeThickness: 1,
            align: 'left'
        }).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }
    
    changeScene ()
    {
        this.scene.start('Captcha');
    }

}
