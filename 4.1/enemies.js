class Enemy {
  constructor(){
    this.r = 30;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 7;
  }
  display(){
    image(enemyImg, this.x, this.y, this.r, this.r);
  }
  move(){
    this.y++;
  }
}