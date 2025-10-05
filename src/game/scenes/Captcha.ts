import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';
import { Input } from 'phaser';
import { Turnstile } from './Turnstile';

export class Captcha extends Scene
{
    img: GameObjects.Image;
    title: GameObjects.Text;

    private graphics!: Phaser.GameObjects.Graphics;

    captchas: Array<string> = ['captcha_candidate',
                                'captcha_crime',
                                'captcha_mcdonalds',
                                'captcha_qualified',
                                'captcha_real']

    private x!: number;
    private y!: number;

    private enterKey: any;
    domElement: Phaser.GameObjects.DOMElement;

    constructor ()
    {
        super('Captcha');
    }

    create ()
    {
        const randNum: number = Phaser.Math.Between(0, this.captchas.length - 1);
        const captchaName: string = this.captchas[randNum];

        this.graphics = this.add.graphics();
        this.img = this.add.image(250, 175, captchaName);
        this.x = (this.game.config.width as number) / 2;
        this.y = (this.game.config.height as number) / 2;

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = 'Type here';
        inputElement.style.width = '137.5px';

        this.domElement = this.add.dom(191, 215, inputElement);
        this.domElement.setOrigin(0.5); // Center the DOM element

        EventBus.emit('current-scene-ready', this);


        this.enterKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    override update(time: number, delta: number): void {
        if (Phaser.Input.Keyboard.JustDown(this.enterKey) && this.domElement.node.textContent != null)
        {
            this.scene.start('Complete');
        }
    }
}
