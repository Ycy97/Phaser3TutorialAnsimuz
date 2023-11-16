window.onload = function(){

    //configuring phaser
    var config = {
        width : 800,
        height : 600,
        backgroundColor : 0x000000,
        scene : [Scene1, Scene2]
    }

    //creating an instance of Phaser Game
    var game = new Phaser.Game(config);
}