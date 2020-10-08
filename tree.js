class Tree{
  constructor(x,y,width,height) {
      var options = {
        isStatic : true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.treeimg = loadImage("images/tree.png");
      World.add(world, this.body);
    }
    display(){
      push();
      //translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.treeimg, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
}