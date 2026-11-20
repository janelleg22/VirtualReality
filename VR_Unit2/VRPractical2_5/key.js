class Key{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.dy = 0.01;

    this.obj = document.createElement("a-entity");

    let head = document.createElement("a-ring");
    head.setAttribute("color","gold");
    head.setAttribute("material","side: double");
    head.setAttribute("position",{x:0,y:0.2,z:0});
    head.setAttribute("rotation", {x:0, y:90, z:0});
    head.setAttribute("radius-inner", .05);
    head.setAttribute("radius-outer", .15);

    let body = document.createElement("a-cylinder");
    body.setAttribute("color","gold");
    body.setAttribute("height",0.5);
    body.setAttribute("radius",0.06);
    body.setAttribute("position",{x:0,y:-0.2,z:0});

    let tip = document.createElement("a-box");
    tip.setAttribute("color","gold");
    tip.setAttribute("width",0.2);
    tip.setAttribute("height",0.08);
    tip.setAttribute("depth",0.1);
    tip.setAttribute("position",{x:0,y:-0.4,z:-.1});
    tip.setAttribute("rotation", {x:0, y:90, z:0});

    this.obj.append(head);
    this.obj.append(body);
    this.obj.append(tip);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
  jump(){
    this.y += this.dy;
    if(this.y < 1 || this.y > 2){
      this.dy = -this.dy;
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

  }
}