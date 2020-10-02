var plPaddle, coPaddle;
var ball;
var topEdge, bottomEdge, leftEdge, rightEdge;
var gameState, END, PLAY, START;

function setup() {

  createCanvas(600, 600);

  plPaddle = createSprite(600 - 15, 300, 10, 100);
  coPaddle = createSprite(15, 300, 10, 100);
  ball = createSprite(295, 300, 10, 10);
  topEdge = createSprite(300, 0, 600, 1);
  bottomEdge = createSprite(300, 600, 600, 1);
  leftEdge = createSprite(0, 300, 1, 600);
  rightEdge = createSprite(600, 300, 1, 600);

  gameState = START;
  ball.velocityX = 5;
  ball.velocityY = 3;
  plPaddle.visible = false;
  coPaddle.visible = false;
  ball.visible = false;
  

}

function draw() {

  background("lightgray");
  
  drawSprites();
  
  if (gameState === START) {
    ball.velocityX = 0;
    ball.velocityY = 0;
    plPaddle.y = 300;
    textSize(30);
    text("PONG", 256, 150);
  }

  if (gameState === END) {
    ball.velocityX = 0;
    ball.velocityX = 0;
    plPaddle.y = 300;
  }

  if (gameState === PLAY) {
    
    line(300, 0, 300, 600);
    
    if(keyWentDown("DOWN")){
      plPaddle.velocityY = 3;
    }
    if(keyWentDown("UP")){
      plPaddle.velocityY = -3;
    }
    if(keyWentDown("DOWN")){
      coPaddle.velocityY = 3;
    }

    if (plPaddle.isTouching(topEdge)) {
      plPaddle.y = 50;
    }
    if (plPaddle.isTouching(bottomEdge)) {
      plPaddle.y = 550;
    }
    if (coPaddle.isTouching(topEdge)) {
      coPaddle.y = 50;
    }
    if (coPaddle.isTouching(bottomEdge)) {
      coPaddle.y = 550;
    }



    if (ball.isTouching(plPaddle)) {
      ball.velocityX = ball.velocityX - 10;
    }
    if (ball.isTouching(coPaddle)) {
      ball.velocityX = ball.velocityX + 10;
    }

    if (ball.isTouching(bottomEdge)) {
      ball.velocityY = ball.velocityY - 6;
    }
    if (ball.isTouching(topEdge)) {
      ball.velocityY = ball.velocityY + 6;
    }

/* remove for single player
    ||
    ||
   \||/
    \/  */
    //coPaddle.y = ball.y;
    //plPaddle.y = mouseY;
  }




}