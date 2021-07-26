class Bob{
    constructor(x, y,radius) {
      var options = {
         'isStatic':false,
        'restitution':0.8,
          'friction':1.5,
          'density':1.5
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(this.x,this.y, this.radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
     translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("purple");
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  

}