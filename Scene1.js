
class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    create(){
        //x and y axis and the next intended to display
        this.add.text(20,20,"Loading game...");
        //switch to Scene2
        this.scene.start("playGame");
    }
}