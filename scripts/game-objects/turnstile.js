class Turnstile extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'turnstile');
        this.scene = scene;
        this.logo = scene.physics.add.image(x, y, 'turnstile');
        this.rotationSpeed = 10;
        this.logo.body.maxSpeed = 400;
        this.logo.body.setDrag(80);
    }

    create() {

    }

    update(time, delta) {

    }

}

export { Turnstile }