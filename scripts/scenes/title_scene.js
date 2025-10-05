class Title extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'title' });
    }

    preload() {
        this.load.image('turnstile', '../../assets/turnstile.png');
    }

    create ()
    {   
        var image = this.add.image(200, 150, 'turnstile');
        var spaceBar = this.input.keyboard.addKey("SPACE");

        spaceBar.on("down", function (event) {
            this.scene.start('captcha');
        }, this);
    }
}

export {Title};