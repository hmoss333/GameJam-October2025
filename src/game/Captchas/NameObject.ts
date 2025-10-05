import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class NameObject extends Scene
{
    img: GameObjects.Image;
    title: GameObjects.Text;

    private graphics!: Phaser.GameObjects.Graphics;

    private x!: number;
    private y!: number;

    private enterKey: any;
    domElement: Phaser.GameObjects.DOMElement;

    constructor ()
    {
        super('NameObject');
    }

    create ()
    {
        this.graphics = this.add.graphics();
        this.img = this.add.image(250, 175, 'name_object');
        this.img.scale = .5;
        this.x = (this.game.config.width as number) / 2;
        this.y = (this.game.config.height as number) / 2

        this.title = this.add.text(0, this.y / 5, 'Name one of the objects in the image', {
            fontFamily: 'Arial Black', fontSize: 24, color: '#000000',
            stroke: '#000000', strokeThickness: 1,
            align: 'center'
        }).setDepth(100);

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = 'Type here';
        inputElement.style.width = '200px';

        this.domElement = this.add.dom(250, 300, inputElement);
        this.domElement.setOrigin(0.5); // Center the DOM element

        EventBus.emit('current-scene-ready', this);

        this.enterKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    override update(time: number, delta: number): void {
        if (Phaser.Input.Keyboard.JustDown(this.enterKey) && this.domElement.node.textContent != null)
        {
            this.scene.start('Complete');
        }
    }
}
