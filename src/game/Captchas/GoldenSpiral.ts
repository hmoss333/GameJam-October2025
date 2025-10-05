import Phaser from 'phaser';
import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';

const PHI = (1 + Math.sqrt(5)) / 2;

export class GoldenSpiral extends Phaser.Scene {
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    logoTween: Phaser.Tweens.Tween | null;    

    private graphics!: Phaser.GameObjects.Graphics;
    private fibonacci: number[] = [1, 1];
    private scaleFactor: number = 3.5; // Adjust for overall size
    private spiralSpeed: number = 10;  // Speed of animation

    private x!: number;
    private y!: number;

    private currentStep: number = 0;
    private totalSteps: number = 40; // Number of Fibonacci circles to draw

    constructor() {
        super({ key: 'GoldenSpiral' });
    }

    create(): void {
        this.graphics = this.add.graphics();
        this.x = (this.game.config.width as number) / 2 - this.scaleFactor;
        this.y = (this.game.config.height as number) / 2 - this.scaleFactor;

        this.title = this.add.text(this.x - 100, this.y / 5, 'Click all circles', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#000000',
            stroke: '#000000', strokeThickness: 1,
            align: 'center'
        }).setDepth(100);

        this.drawNextStep();
        this.currentStep++;

        EventBus.emit('current-scene-ready', this);
    }

    override update(time: number, delta: number): void {
        if (this.input.mousePointer.leftButtonDown() && this.currentStep < this.totalSteps) {
            if (this.spiralSpeed-- <= 0) {
                this.spiralSpeed = 10;
                this.drawNextStep();
                this.currentStep++;
            }
        }

        if (this.currentStep >= this.totalSteps)
        {
            this.scene.start('Complete');
        }
    }

    private drawNextStep(): void {
        if (this.fibonacci.length < this.currentStep + 2) {
            const nextFib = this.fibonacci[this.fibonacci.length - 1] + this.fibonacci[this.fibonacci.length - 2];
            this.fibonacci.push(nextFib);
        }

        const size = this.fibonacci[this.currentStep] * this.scaleFactor;
        const lastSize = (this.currentStep > 0) ? this.fibonacci[this.currentStep - 1] * this.scaleFactor : 0;

        this.graphics.fillStyle(0xD4AF37, 0.1); // Semi-transparent gold circles
        this.graphics.fillCircle(this.x, this.y, size);

        switch (this.currentStep % 4) {
            case 0: 
                this.x += lastSize;
                break;
            case 1:
                this.y += lastSize;
                break;
            case 2:
                this.x -= lastSize;
                break;
            case 3:
                this.y -= lastSize;
                break;
        }

        if (this.currentStep > 0) {
            this.graphics.beginPath();
            this.graphics.strokePath();
        }
    }
}