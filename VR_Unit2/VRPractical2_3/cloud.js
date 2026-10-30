class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("color", "#F5D1C8");
    sphere1.setAttribute("radius", "1.4");
    sphere1.setAttribute("position", "0 0 0");
    this.obj.append( sphere1 );

    let sphere2 = document.createElement("a-sphere");
    sphere2.setAttribute("color", "#F5D1C8");
    sphere2.setAttribute("radius", "1");
    sphere2.setAttribute("position", "1.2 0.2 0");
    this.obj.append( sphere2 );
  
    let sphere3 = document.createElement("a-sphere");
    sphere3.setAttribute("color", "#F5D1C8");
    sphere3.setAttribute("radius", "1");
    sphere3.setAttribute("position", "-1.2 0.1 0");
    this.obj.append(sphere3);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}