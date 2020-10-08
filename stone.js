class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution : 0.5,
          friction : 1,
          density : 1.3
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.stoneimg = loadImage("images/stone.png");
      World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.stoneimg, 0, 0, this.radius + 20, this.radius + 20);
        pop();
    }
  };

  