var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var scenarySpeed = 1;   // variavel para definir a velocidade do senário

function preload ()
{
    this.load.image('ground', 'assets/ground.png');
    this.load.image('clouds', 'assets/clouds.png');
    this.load.image('mountains', 'assets/mountains.png');
    this.load.image('sky', 'assets/sky.png');

    this.load.spritesheet('spaceship', 'assets/spaceship.png', {
        frameWidth: 96,
        frameHeight: 48
    });
}

function create ()
{
    
    this.add.image(400, 300, 'sky');

    this.clouds = this.add.tileSprite(400, 300, config.width, config.height, "clouds");
    this.mountains = this.add.tileSprite(400, 300, config.width, config.height, "mountains");
    this.ground = this.add.tileSprite(400, 300, config.width, config.height, "ground");
    
    // adicionar o sprite do jogador
    this.ship = this.add.sprite(50, 50, 'spaceship');

    // criar a animação
    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('spaceship', { start: 0, end: 2 }),
        frameRate: 20,
        repeat: -1
    });

    // animação
    this.ship.play("fly");

    
}

function update ()
{
    moveScenery(this.clouds, this.mountains, this.ground, scenarySpeed);
    
}

/**
 * função para criar o movimento dos elementos do cenário
 */
function moveScenery (clouds, mountains, ground, speed)
{
    //deslocamento horizontal dos elementos
    ground.tilePositionX += speed *2 ;   
    mountains.tilePositionX += speed / 10; 
    clouds.tilePositionX += speed / 4;
}
