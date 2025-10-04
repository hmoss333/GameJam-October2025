import { Ship } from "../game-objects/ship.js";
import { Turnstile } from "../game-objects/turnstile.js";

class Captcha extends Phaser.Scene
    {
        constructor ()
        {
            super({ key: 'captcha' });
        }
        init (data) {

        }
        preload ()
        {
            this.load.image('logo', '../../assets/turnstile.png');
            this.load.image('ship', '../../assets/ship.png');
        }
        create ()
        {
            // this.add.image(400, 300, 'sky');
            this.ship = new Ship(this, 200, 200);
            // config

        }
        update(time, delta) {
            this.ship.update();
        }
    }

export {Captcha};

