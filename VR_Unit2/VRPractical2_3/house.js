class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color", "#E3D3BA");
    base.setAttribute("width", "2");
    base.setAttribute("height", "2");
    base.setAttribute("depth", "2");
    base.setAttribute("position", "0 1 0");
    this.obj.append( base );
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "#FEA4C5");
    roof.setAttribute("radius", "1.4");
    roof.setAttribute("height", "2.2");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("rotation", "30 0 90");
    roof.setAttribute("position", "0 2.5 0");
    this.obj.append( roof );

    let door = document.createElement("a-plane");
    door.setAttribute("color", "#FEA4C5");
    door.setAttribute("height", "2");
    door.setAttribute("width", ".8");
    door.setAttribute("rotation", "0 90 0");
    door.setAttribute("position", "-1.1 0 -.1");
    door.setAttribute("material", "side: double");
    this.obj.append(door);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}