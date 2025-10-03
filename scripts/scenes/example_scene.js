import { Ship } from "../game-objects/ship.js";
import { Rock } from "../game-objects/rocks.js"

class Example extends Phaser.Scene
    {
        constructor ()
        {
            super({ key: 'example' });
        }
        init (data) {

        }
        preload ()
        {
            this.load.image('logo', '../../assets/phaser3-logo.png');
            this.load.image('beam', '../../assets/beam.png');
            this.load.image('ship', '../../assets/ship.png');
            this.load.image('rock', '../../assets/asteroid.png');
        }
        create ()
        {
            // this.add.image(400, 300, 'sky');
            this.ship = new Ship(this, 200, 200);
            // config
            const config = {
                classType: Rock,
                active: true,
                maxSize: -1,
                runChildUpdate: true,
            }
            this.rockGroup = this.add.group(config);
            // group (config)
            // this.rock = new Rock(this, 500, 500);
            this.rockGroup.add( new Rock(this, 500, 500));
            this.rockGroup.add( new Rock(this, 100, 100));
            this.rockGroup.add( new Rock(this, 500, 100));
            this.physics.add.collider(this.ship.ship, this.rockGroup, this.collideCallback)
        }
        collideCallback = function (gameObject1, gameObject2) {
            console.log("blam");
        }
        update(time, delta) {
            this.ship.update();
            // this.rock.update();
        }
    }

export {Example};

