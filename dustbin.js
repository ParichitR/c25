class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
 

        }

        this.image=loadImage("dustbin.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width
        this.height=height
        
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER)
       image(this.image,pos.x,pos.y,180,300)
    }
}