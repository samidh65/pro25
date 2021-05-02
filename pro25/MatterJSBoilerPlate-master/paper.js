class paper{

constructor(x,y,r){
var options = {
isStatic : false,
restitution : 0.3,
friction : 0.5,
density : 1.2,
}

this.body = Bodies.circle(x,y,r,options)
this.radius = r
World.add(world,this.body)
this.bodyImage = loadImage("paper.png")




    
}
display(){
    imageMode (RADIUS)
var pos = this.body.position
image(this.bodyImage,pos.x,pos.y,this.radius,this.radius)





}















}