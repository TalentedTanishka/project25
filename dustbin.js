class Dustbin
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic : true
        }
         this.body = Bodies.rectangle(x,y,width,height,options)
         this.width = width
         this.height = height
        World.add(world,this.body)
        this.image = loadImage("sprites/dustbingreen.png")
    }

     display()
     {
    var pos = this.body.position
    var posi = this.image.position
    push();
     rectMode(CENTER)  
       fill("white")
        rect(pos.x , pos.y , this.width , this.height)
        imageMode(CENTER)
        image(this.image,685,554,230,230);
        pop();

     }


}