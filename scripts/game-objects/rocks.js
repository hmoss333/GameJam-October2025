class Rock extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'rock');
        this.scene = scene;
        this.rock = scene.physics.add.image(x, y, 'rock');
        this.rock.body.setVelocityX(Math.floor(Math.random() * 500));

        this.rock.body.setVelocityY(Math.floor(Math.random() * 500));

        this.rock.body.setAngularVelocity(Math.floor(Math.random() * 50));
    }

    create() {

    }

    update(time, delta) {

        this.scene.physics.world.wrap(this.rock, 10);
    }

}

export { Rock }