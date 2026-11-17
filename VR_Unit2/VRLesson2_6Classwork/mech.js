class Mech{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dz = rnd(1,13) / 20 ;

    this.obj = mechTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );

  }
  move(){
    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}