'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 700;
let h = 700;
function setup() {
  cnv = createCanvas(w, h);
  textFont('monoSpace');
  //cnv.mouseClicked(function(){
      //console.log('canvas is clicked');
      //state = 'level 1'
  //});
}

function draw() {
  switch (state){
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
  text('NEON BEAT', w/2, h/5 );
  textSize(30);
  text('click anywhere to begin', w/2, h/2);
}
function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}
function level1() {
  background('#fae');
  text('click for points', w/2, h - 30);
}
function level1MouseClicked(){
    //console.log('points = ' + points);
    //points = points + 1;
    points++
    console.log('points = ' + points);
    //points +=1;
    if (points >= 10){
    state = 'you win';
    }
}
function youWin(){
  background(200);
  textSize(30);
  stroke(355);
  text('YOU WIN', w/2, h/2);
  textSize(30);
  text('click anywhere to restart', w/2, h * 3/4);
}
function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
