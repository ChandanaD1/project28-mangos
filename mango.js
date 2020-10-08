class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution : 0,
          friction : 1,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.mangoimg = loadImage("images/mango.png");
      World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.mangoimg, 0, 0, this.radius + 20, this.radius + 20);
        pop();
    }
  };