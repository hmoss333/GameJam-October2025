class Ship extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'ship');
        this.scene = scene;
        this.ship = scene.physics.add.image(x, y, 'ship');
        this.rotationSpeed = 10;
        this.ship.body.maxSpeed = 400;
        this.ship.body.setDrag(80);
        this.cursorKeys = this.scene.input.keyboard.createCursorKeys();
    }

    create() {

    }

    update(time, delta) {
        if (this.cursorKeys.up.isDown) {
            console.log('goooo')
            var vec = Phaser.Math.Vector2.ZERO;
            this.scene.physics.velocityFromAngle(this.ship.body.rotation -90, 10, vec);
            this.ship.body.velocity.add(vec);
            // this.scene.physics.arcade.setAngularVelocity(this.ship.body.rotation, 200, this.ship.body);
        }
        if (this.cursorKeys.down.isDown) {
            console.log('goooo')
            this.ship.body.setVelocityY(500);
        }
        if (this.cursorKeys.left.isDown) {
            this.ship.body.rotation -= this.rotationSpeed;
        }
        if (this.cursorKeys.right.isDown) {
        }
        this.scene.physics.world.wrap(this.ship, 10);
    }

}

export { Ship }