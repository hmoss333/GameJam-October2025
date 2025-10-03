class Title extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'title' });
    }

    create ()
    {   
        this.score = 0;
        var spaceBar = this.input.keyboard.addKey("SPACE");
        this.add.text(0, 0, 'Discord Interview', {fontSize: "48px"})
        this.add.text(0, 150, 'press the spacebar to change scene');

        spaceBar.on("down", function (event) {
            this.scene.start('example');
        }, this);
    }
}


export {Title};