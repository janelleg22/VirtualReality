class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random() * 0.1 + 0.01;
    this.obj = document.createElement("a-entity");

    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("radius",0.5);
    sphere.setAttribute("scale",{x:1,y:0.5,z:1});
    sphere.setAttribute("color","green");
    sphere.setAttribute("opacity",0.8);
    sphere.setAttribute("position",{x:0,y:0.3,z:0});
    this.obj.append(sphere);

    let ring = document.createElement("a-ring");
    ring.setAttribute("radius-inner",0.5);
    ring.setAttribute("radius-outer",1);
    ring.setAttribute("color","black");
    ring.setAttribute("rotation",{x:-90,y:0,z:0});
    ring.setAttribute("position",{x:0,y:0.3,z:0});
    ring.setAttribute("material", "side: double");
    this.obj.append(ring);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
  }

  invade(){
    if(this.y > 0){
      this.y -= this.dy;

    if(this.y < 0){
      this.y = 0;
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})

  }
}
}