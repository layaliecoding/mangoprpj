class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("Plucking mangoes/mango.png");
      World.add(world, this.body);
      var mango1= createSprite(100,100,10,10);
      var mango2= createSprite(100,100,10,10);
      var mango3= createSprite(100,100,10,10);
      var mango4= createSprite(100,100,10,10);
      var mango5= createSprite(100,100,10,10);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
    }

  };