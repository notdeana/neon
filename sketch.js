'use strict';

let state = 'title';
let cnv;
let points = 1;
let lives = 3;
let w = 700;
let h = 700;
let player;
let coins = [];
let enemies = [];
let projectile = [];
let playerImg;
let coinImg;
let enemyImg;
let projectileImg;
let bg;
let pizzaImg;

function preload() {

  playerImg = loadImage('assets/chara/rae.png');
  coinImg = loadImage('assets/coins/corn.png');
  enemyImg = loadImage('assets/enemy/blueham.png');
  projectileImg = loadImage('assets/projectile/seed.png');
  pizzaImg = loadImage('assets/bg/pizza.png');
}

function setup() {
  //  bg = loadImage('assets/bg/bg.png');
  cnv = createCanvas(w, h);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('monoSpace');
  player = new Player();
  coins[0] = new Coin();
  enemies[0] = new Enemy();
  projectile[0] = new Projectile();
  //console.log(projectile);
  //cnv.mouseClicked(function(){
  //console.log('canvas is clicked');
  //state = 'level 1'
  //});
}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you made a pizza!':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'Game Over...':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
  }
  //  if (state === 'title') {
  //  /title();
  //  cnv.mouseClicked(titleMouseClicked);
  //cnv.mouseClicked(function(){
  //console.log('canvas is clicked on title page');
  //state = 'level 1'
  //});
  //background(200);
  //textSize(30);
  //stroke(355);
  //text('NEON BEAT', 270, 100);
  //  } else if (state === 'level 1' && points > 50) {
  //  level1();
  //  cnv.mouseClicked(level1MouseClicked);
  //function(){
  //console.log('canvas is clicked on title page');
  //state = 'level 1'
}

function keyPressed() {
  if (key == 'a') {
    player.direction = 'left'
  } else if (key == 'd') {
    player.direction = 'right'
  } else if (key == 'w') {
    player.direction = 'up'
  } else if (key == 's') {
    player.direction = 'down'
  } else if (key = ' ') {
  projectile.push(new Projectile);
}
console.log(projectile);
}
//  } else {

//}
//}
//function canvasClicked(){
//console.log('canvas is clicked');
//}
//function mousePressed(){
//state = 'level 1';
//}
function keyReleased() {
  let numberKeysPressed = 0;
  if (keyIsDown('a')) {
    numberKeysPressed++;
  }
  if (keyIsDown('d')) {
    numberKeysPressed++;
  }
  if (keyIsDown('w')) {
    numberKeysPressed++;
  }
  if (keyIsDown('s')) {
    numberKeysPressed++;
  }
  console.log(numberKeysPressed);
  if (numberKeysPressed == 0) {
    player.direction = 'still';
  }
}

function title() {
  background('#b1f2c6');
  textSize(30);
  fill(355);
  //stroke(355);
  textAlign(CENTER);
  //text('HUNGRY HUNGRY HAMSTERS', w / 2, h / 5);
  textSize(25);
  text('🐹 click anywhere to start 🐹', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background('#f2e6b1');
  if (random(1) <= 0.03) {
    coins.push(new Coin());
  }
  if (random(1) <= 0.07) {
    enemies.push(new Enemy());
  }
  //text('click for points', w/2, h - 30);
  player.display();
  player.move()



  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
    if (enemies[i].y >= h + enemies[i].r / 2){
      points--;
      enemies.splice(i, 1);
    }
  }
  for (let i = 0; i < projectile.length; i++) {
    projectile[i].display();
    projectile[i].move();
  }
  //coins.forEach(function(coin){
  //coin.display
  //})
  for (let i = projectile.length - 1; i >=0; i--){
  for (let j = coins.length - 1; j >= 0; j--) {
    if (dist(projectile[i].x, projectile[i].y, coins[j].x, coins[j].y) <= (projectile[i].r + coins[j].r) / 2) {
      points++;
      console.log(points);
      coins.splice(j, 1);
    } else if (coins[j].y > h) {
      coins.splice(j, 1);
      //console.log('coin is out of town')
    }
  }
  for (let j = enemies.length - 1; j >= 0; j--) {
    if (projectile[i] && dist(projectile[i].x, projectile[i].y, enemies[j].x, enemies[j].y) <= (projectile[i].r + enemies[j].r) / 2) {
      points++;
      console.log(points);
      enemies.splice(j, 1);
      projectile.splice(i, 1);
    }
    // } else if (enemies[j].y > h) {
    //   enemies.splice(j, 1);
    //   //console.log('coin is out of town')
    // }
  }
}
  text('energy: ' + points, w / 4, h - 30);
  if (points >= 30) {
    state = 'you made a pizza!';
  } else if (points <= -1) {
    state = 'Game Over...';
  }
}

function level1MouseClicked() {
  //console.log('points = ' + points);
  //points = points + 1;
  points++
  console.log('points = ' + points);
  //points +=1;
  if (points >= 10) {
    state = 'your hamster is fed!';
  }
}

function youWin() {
  background(pizzaImg);
  textSize(30);
  stroke(355);
  text('you made a pizza!', w / 2, h / 2);
  textSize(30);
  text('click anywhere to make another', w / 2, h * 3 / 4);
}

function gameOver() {
  background('#f2b7b1');
  textSize(30);
  if (lives >= 0){
  //  lives--;
    stroke(355);
    text(lives + ' lives left', w / 2, h / 2);
    textSize(30);
    text('continue?', w / 2, h * 3 / 4);
  } else {
    stroke(355);
    text('Game Over...', w / 2, h / 2);
    textSize(30);
    text('click anywhere to restart', w / 2, h * 3 / 4);
  }


}

function gameOverMouseClicked() {
    if (lives >= 0){
        lives--;
  state = 'level 1';

} else {
  state = 'title';
}
  points = 1;
  enemies = [];
  projectile = [];
}

function youWinMouseClicked() {
  state = 'title';
  points = 1;
  enemies = [];
  projectile = [];
}
