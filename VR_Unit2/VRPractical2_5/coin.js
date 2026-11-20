class Coin{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.a = 0;
    this.da = 1;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("material","src: #gold");
    this.obj.setAttribute("radius",.3);
    this.obj.setAttribute("height",.3);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation",{x:90,y:0,z:90});
    scene.append(this.obj);

  }
    spin(){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:90, y:0, z:this.a});
  }
}