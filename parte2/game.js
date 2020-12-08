var config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Criar o objeto game com as propriedades do jogo
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ground', 'assets/ground.png');
    this.load.image('clouds', 'assets/clouds.png');
    this.load.image('mountains', 'assets/mountains.png');
    this.load.image('sky', 'assets/sky.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'clouds');
    this.add.image(400, 300, 'mountains');
    this.add.image(400, 300, 'ground');
    
}

function update ()
{
}



