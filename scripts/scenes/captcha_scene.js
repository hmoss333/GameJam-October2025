import { Turnstile } from "../game-objects/turnstile.js";

class Captcha extends Phaser.Scene {
    constructor() {
        super({ key: 'captcha' });

        this.captchas = ['goldenratio'];
    }

    init(data) {

    }
    preload() {
        this.load.image('logo', '../../assets/turnstile.png');
        //this.load.image('ship_img', '../../assets/ship.png');
    }
    create() {
        // this.add.image(400, 300, 'sky');
        //this.ship = new Ship(this, 200, 200);
        //this.letter = new Letter(this, 200, 200);
        // config
        this.randomCaptcha();
    }

    randomCaptcha() {
        //TODO randomly select from list of captcha scenes
        const randNum = Phaser.Math.Between(0, this.captchas.length - 1);
        const captchaString = this.captchas[randNum];
        this.scene.start(captchaString);
    }

    update(time, delta) {
        //this.ship.update();
    }
}

export { Captcha };

