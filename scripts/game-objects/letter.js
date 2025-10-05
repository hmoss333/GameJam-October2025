class Letter extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'letter');
        this.scene = scene;
        this.letter = scene.physics.add.image(x, y, 'ship_img');
        this.rotationSpeed = 10;
        this.letter.body.maxSpeed = 400;
        //this.letter.body.setDrag(80);
    }

    setRandomVelocity (object, speed) {
        angle = Phaser.Math.Between(0, 360) * (Math.PI / 180);

        velocityX = Math.cos(angle) * speed;
        velocityY = Math.sin(angle) * speed;

        object.setVelocity(velocityX, velocityY);
    }

    create() {
        this.object = this.physics.add.Sprite(x, y, 'letter');

        this.object.setBounce(1);

        this.setRandomVelocity(this.object, 1);
    }

    update(time, delta) {
        //this.scene.physics.world.wrap(this.letter, 10);
    }
}

export {Letter}