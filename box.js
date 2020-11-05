class Box extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      stroke(112,95,247);
     super.display();
     //Matter.Body.setAngle(this.body, angle);
    }
  }