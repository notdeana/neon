class Projectile {
  constructor(){
    this.r = 17;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 7;
  }
  display(){
  //  stroke(70);
    //fill(130, 333, 117);
    //ellipse(this.x, this.y, this.r, this.r);
      image(projectileImg, this.x, this.y, this.r, this.r);
    }

  move(){
    this.y-= this.speed;
  }
}
