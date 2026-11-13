class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = .01;
    this.obj = document.createElement("a-entity");
  
    let top = document.createElement("a-cone");
    top.setAttribute("position","0 2.5 0");
    top.setAttribute("radius-top","0");
    top.setAttribute("radius-bottom","0.5");
    top.setAttribute("height","1");
    top.setAttribute("color","red");
    this.obj.append( top );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 1 0");
    body.setAttribute("height","2");
    body.setAttribute("color","gray");
    body.setAttribute("radius","0.5");
    this.obj.append( body );
  
    scene.append( this.obj )

    // let rockets =[];
    //   for(let i = 0; i < 100; i++){
    //   let x = rnd(-25, 25);
    //   let y = rnd(-5, 0);
    //   let z = rnd(-25, 25);

    //   rockets.push(new Rocket(x, y x));
    //   }

  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.y > 20){
      this.y = 0;
    }
  }


}