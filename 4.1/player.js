class Player {
  constructor() {
    this.r = 70; //diameter not radius
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }
  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
    //rect(this.x, this.y, this.r, this.r);
  }
  move() {

    switch (this.direction) {
      case 'still':
        //dont move anything
        break;
      case 'up':
        if (this.y - this.r / 2 > 0) {
          //decrease y poss
          //y--;
          this.y -= this.speed;
        }
        break;
      case 'down':
        if (this.y < h - this.r / 2) {
          this.y += this.speed;
        }
        break;
      case 'right':
        //inc x pos
        if (this.x < w - this.r / 2) {
          this.x += this.speed;
        }
        break;
      case 'left':
        if (this.x - this.r / 2 > 0) {
          this.x -= this.speed;
        }
        //decreasing x pos
        break;
      default:
        break;
    }
  }
}
