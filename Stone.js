class Stone {
    constructor(x,y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.r = Bodies.rectangle(x,y, 50, 50, options);
      this.width = 150;
      this.height = 100;
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
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
