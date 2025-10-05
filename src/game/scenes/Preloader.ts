import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('turnstile_img', 'turnstile.png');
        this.load.image('gatekeep_img', 'gatekeep.png');
        this.load.image('ship_img', 'ship.png');
        this.load.image('name_object', 'name_object.png')
        this.load.image('captcha_candidate', 'candidate.png');
        this.load.image('captcha_crime', 'crime.png');
        this.load.image('captcha_mcdonalds', 'mcdonalds.png');
        this.load.image('captcha_qualified', 'qualified.png');
        this.load.image('captcha_real', 'real.png');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Turnstile');
    }
}
