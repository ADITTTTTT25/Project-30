class Box {
    constructor(x,y,width,height){
       var options = {
            restitution:1
            
        }
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
        }

    display(){
        
        var pos = this.body.position;
        if(this.body.speed<4){
            var pos = this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.w,this.h);
        }
        else{
          push();
          World.remove(world,this.body);
          this.visibility= this.visibility- 5;
          tint(255,this.visibility);
          pop();
        }
      }
    }