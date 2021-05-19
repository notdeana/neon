'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 700;
let h = 700;
let player;
let coins = [];
let A = 'left'
let playerImg;
let coinImg;
function preload(){
  playerImg = loadImage('assets/chara/rae.png');
    coinImg = loadImage('assets/coins/corn.png');
}
function setup() {
  cnv = createCanvas(w, h);

  textFont('monoSpace');
  player = new Player();
  coins[0] = new Coin();
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
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
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
  if (key == A) {
    player.direction = 'left'
  } else if (key == D) {
    player.direction = 'right'
  } else if (key == W) {
    player.direction = 'up'
  } else if (key == S) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
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

function title() {
  background(20);
  textSize(30);
  fill(355);
  //stroke(355);
  textAlign(CENTER);
  text('HUNGRY HUNGRY HAMSTERS', w / 2, h / 5);
  textSize(30);
  text('click anywhere to begin', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background('#fae');
  if (random(1) <= 0.01){
    coins.push(new Coin());
  }
  //text('click for points', w/2, h - 30);
  player.display();
  player.move()

  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }
  //coins.forEach(function(coin){
    //coin.display
  //})
  for (let i = coins.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
    points++;
    console.log(points);
    coins.splice(i, 1);
  } else if (coins[i].y > h){
    coins.splice(i, 1);
    console.log('coin is out of town')
  }
}
  text('energy: ' + points, w / 4, h - 30);
}

function level1MouseClicked() {
  //console.log('points = ' + points);
  //points = points + 1;
  points++
  console.log('points = ' + points);
  //points +=1;
  if (points >= 10) {
    state = 'you win';
  }
}

function youWin() {
  background(200);
  textSize(30);
  stroke(355);
  text('YOU WIN', w / 2, h / 2);
  textSize(30);
  text('click anywhere to restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
