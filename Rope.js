class Rope {
    constructor(body1,body2,OffsetX,OffsetY)
    {
        this.OffsetX=OffsetX
        this.OffsetY=OffsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.OffsetX, y:this.OffsetY},
        }
        this.Rope=Constraint.create(options)
        World.add(world,this.Rope)    
    }
   display(){
       var pointA=this.Rope.bodyA.position
       var pointB=this.Rope.bodyB.position
      strokeWeight(4)
      var Anchor1X=pointA.x 
      var Anchor1Y=pointA.y 
      var Anchor2X=pointB.x+this.offsetX 
      var Anchor2Y=pointB.y+this.offsetY
       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

   }



}