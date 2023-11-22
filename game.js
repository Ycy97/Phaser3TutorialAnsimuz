//configuring phaser
var gameSettings = {
    playerSpeed:200,
}

var config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

//creating an instance of Phaser Game
var game = new Phaser.Game(config);
