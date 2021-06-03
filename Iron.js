class Iron {
    constructor(x,y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.8
      };
      this.r = Bodies.rectangle(x,y, 150, 50, options);
      this.width = 150;
      this.height = 50;
      World.add(world, this.r);
    };
    display(){
      var pos = this.r.position;
      ellipse(0,0,this.r,this.r);
      var angle = this.r.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
