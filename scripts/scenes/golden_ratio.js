import { Letter } from "../game-objects/letter.js";

class GoldenRatio extends Phaser.Scene {
    
    constructor() {
        super({ key: 'goldenratio' });

        this.radius = Math.sqrt(100);
        this.phi = (1 + Math.sqrt(5)) / 2;
        this.dotSize = 1;//0.05;
        this.count = 1000;
        this.fillColor = '#000000ff';
        this.hasRun = false;
    }

    preload() {
        this.load.image('ship_img', '../../assets/ship.png');
    }
    // create(){
    //     for (let i = 0; i < this.count; i++) 
    //     {
    //         const f = i / this.count;
    //         const a = i * this.phi;
    //         const dist = f * Math.sqrt(400);

    //         const x = 200 + Math.cos(a * (2 * Math.PI)) * dist;
    //         const y = 200 + Math.sin(a * (2 * Math.PI)) * dist;

    //         const r = f * this.dotSize;

    //         // Draw a circle
    //         //this.myCircle = new Letter(this, x, y); //Placeholder
    //         this.createCircle(x, y, r);
    //     }

    //     this.hasRun = true;
    //     // console.log("Has Run " + this.hasRun);
    // }

    createCircle(x, y, r)
    {
        const myCircle = this.add.circle(x, y, r, this.fillColor);
        console.log("Created circle at: " + x + ", " + y);
    }

    update(time, delta) {
        if (this.hasRun == false) {
            this.count = 1000 * delta;

            for (let i = 0; i < this.count; i++) {
                const f = i / this.count;
                const a = i * this.phi;
                const dist = f * Math.sqrt(200);

                const x = 200 + Math.cos(a * (2 * Math.PI)) * dist;
                const y = 200 + Math.sin(a * (2 * Math.PI)) * dist;

                const r = f * this.dotSize;

                // Draw a circle
                this.createCircle(x, y, r);
            }

            this.hasRun = true;
        }

        //this.create();
    }
}

export { GoldenRatio };