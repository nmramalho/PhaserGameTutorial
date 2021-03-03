var config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
};

// Criar o objeto game com as propriedades do jogo
var game = new Phaser.Game(config);

var scenarySpeed = 1;   // variavel para definir a velocidade do senário
var shipSpeed = 200;    // variável para definir a velocidade da nave

function preload ()
{
    this.load.image('ground', 'assets/ground.png');
    this.load.image('clouds', 'assets/clouds.png');
    this.load.image('mountains', 'assets/mountains.png');
    this.load.image('sky', 'assets/sky.png');

    this.load.spritesheet('plane', 'assets/plane.png', {
        frameWidth: 94,
        frameHeight: 64
    });
}

function create ()
{
    
    this.add.image(400, 300, 'sky');

    this.clouds = this.add.tileSprite(400, 300, config.width, config.height, "clouds");
    this.mountains = this.add.tileSprite(400, 300, config.width, config.height, "mountains");
    this.ground = this.add.tileSprite(400, 300, config.width, config.height, "ground");
    
    // adicionar o sprite do jogador com física
    this.ship = this.physics.add.sprite(50, 50, 'plane');
    this.ship.setBounce(0);                 // velocidade do resalto ao embater (0 não ressalta)
    this.ship.setCollideWorldBounds(true);  // evita que a nave saia da area de jogo

    // criar a animação
    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('plane', { start: 0, end: 2 }),
        frameRate: 20,
        repeat: -1
    });

    // animação
    this.ship.play("fly");

    // verificar eventos do teclado
    this.cursorKeys = this.input.keyboard.createCursorKeys();


}

function update ()
{
    // função para criar o movimento dos elementos do cenário
    moveScenery(this.clouds, this.mountains, this.ground, scenarySpeed);
    
    // função para controlar o movimento da nave
    moveShip(this.cursorKeys, this.ship);

 
}

/**
 * Função para criar o movimento dos elementos do cenário
 */
function moveScenery (clouds, mountains, ground, speed)
{
    //deslocamento horizontal dos elementos
    ground.tilePositionX += speed * 4;   
    mountains.tilePositionX += speed / 10; 
    clouds.tilePositionX += speed / 4;
}

/**
 * Função para controlar o movimento da nave com base nas teclas
 * pressionadas (teclas de cursor)
 */
function moveShip(cursorKeys, ship)
{
  ship.setVelocity(0, 0);

  if (cursorKeys.left.isDown)
  {
    ship.setVelocityX(-shipSpeed);
  }
  else if (cursorKeys.right.isDown)
  {
    ship.setVelocityX(shipSpeed);
  }
  
  if(cursorKeys.up.isDown)
  {
    ship.setVelocityY(-shipSpeed);
  }
  else if(cursorKeys.down.isDown)
  {
    ship.setVelocityY(shipSpeed);
  }
}