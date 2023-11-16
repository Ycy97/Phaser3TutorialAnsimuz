//configuring phaser
var config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true
    }

//creating an instance of Phaser Game
var game = new Phaser.Game(config);
