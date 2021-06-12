class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  
  this.smokeImage=loadImage("sprites/smoke.png");
  this.trej=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position=[this.body.position.x,this.body.position.y];
    this.trej.push(position);
    
    for(var i=0;i<this.trej.length;i=i+1){
      image(this.smokeImage,this.trej[i][0],this.trej[i][1]);

    }
    super.display();
  }
}
